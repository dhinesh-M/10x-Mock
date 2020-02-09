import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetAppService {

  constructor(private http: HttpClient) { }

  getListOfApps():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:2883/app/getallapp").pipe(
      catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err);
    return Observable.throw(err.error() || 'Server error');
  }
}
