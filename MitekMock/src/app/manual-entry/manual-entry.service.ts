import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Request} from './request'
@Injectable({
  providedIn: 'root'
})
export class ManualEntryService {

  constructor(private http: HttpClient) { }

  addApi(appName:String,body_req:any):any{
    
    return this.http.post<any>('http://localhost:2883/cherry/add/'+appName,body_req).pipe(
      catchError(this.handleError));
  
  }

  getListOfApi(appName:String):Observable<Request[]>{
    return this.http.get<Request[]>('http://localhost:2883/mitek/response/mocked/cache/'+appName).pipe(
      catchError(this.handleError));
  }

  deleteEditApi(appName:String,body_req:Request):any{
    return this.http.post<any>('http://localhost:2883/cherry/remove/'+appName,body_req).pipe(
      catchError(this.handleError));
  }
  private handleError(err: HttpErrorResponse) {
    console.error(err);
    return Observable.throw(err.error() || 'Server error');
  }
}
