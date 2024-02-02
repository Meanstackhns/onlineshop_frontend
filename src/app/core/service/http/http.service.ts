import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environment/environment';
import { IhttpRequest } from '../../interface/http-opt-req';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(public http: HttpClient) { }


  jsonGet<T>(url: any, options?: IhttpRequest): Observable<T> {
    return this.http.get<T>(url, options).pipe(catchError(this.handleError))
  }
  get<T>(url: any, options?: IhttpRequest): Observable<T> {
    url = `${environment.API_KEY}/${url}`
    return this.http.get<T>(url, options).pipe(catchError(this.handleError))
  }

  post<T>(url: any, params: any, options?: IhttpRequest): Observable<T> {
    url = `${environment.API_KEY}/${url}`
    return this.http.post<T>(url, params, options).pipe(catchError(this.handleError))
  }

  put<T>(url: any, params: any, options?: IhttpRequest): Observable<T> {
    url = `${environment.API_KEY}/${url}`
    return this.http.put<T>(url, params, options).pipe(catchError(this.handleError))
  }

  delete<T>(url: any, options?: IhttpRequest): Observable<T> {
    url = `${environment.API_KEY}/${url}`
    return this.http.delete<T>(url, options).pipe(catchError(this.handleError))
  }
  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
