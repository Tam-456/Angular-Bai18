import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private _url: string = '/datasets/customers.json';

  constructor(private _http: HttpClient) {}

  getGroupCustomers(): Observable<any[]> {
    return this._http.get<any[]>(this._url);
  }
}