import { Injectable } from '@angular/core';
import { files } from './files';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs/index";
import { catchError } from 'rxjs/operators';
import { mockedResponse } from './mockedResponse';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  constructor(private http: HttpClient) { }

  getFiles(): Observable<files[]> {
    return this.http.get<files[]>('http://localhost:2883/mitek/getFiles').pipe(
      catchError(this.handleError));
  }

  selectFile(selectedFile:string,appName:String) {
     return this.http.get('http://localhost:2883/mitek/setFile/'+selectedFile+"/"+appName, {responseType: 'text'}).pipe(
      catchError(this.handleError));
  }

  getMockedResponse():Observable<mockedResponse[]> {
    return this.http.get<mockedResponse[]>('http://localhost:2883/mitek/response/mocked').pipe(
     catchError(this.handleError));
 }


  private handleError(err: HttpErrorResponse) {
    console.error(err);
    return Observable.throw(err.error() || 'Server error');
  }
}
