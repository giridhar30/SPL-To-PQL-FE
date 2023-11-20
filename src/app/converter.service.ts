import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRequest } from './api-request.model';
import { ApiResponse } from './api-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor(private http: HttpClient) { }

  baseURL: string = "http://127.0.0.1:5000/"

  convertSPL(request: ApiRequest): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseURL + 'convert', request)
  }

}
