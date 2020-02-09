import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { catchError } from 'rxjs/operators';
import { ResponseMsg } from './response-msg';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HomeAddAppService {
 
  constructor(private http: HttpClient) { }

  saveCreatedApp(appName: String): Observable<ResponseMsg> {
    return this.http.get<ResponseMsg>('http://localhost:2883/app/insert/' + appName).pipe(
      catchError(this.handleError));
  }


  private handleError(err: HttpErrorResponse) {
    console.error(err);
    return Observable.throw(err.error() || 'Server error');
  }
}
