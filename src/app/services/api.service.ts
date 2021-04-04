import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class APIService {

  constructor(private http: HttpClient) {
  }

  detalhes(url: any): Observable<any> {

    return this.http.get<any>(url);
  }

  listar(search?: any): Observable<any> {

    return this.http.get<any>(environment.apiUrl + search);
  }

}
