import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly apiURL = 'https://localhost:44349/api/shipper/cart';
  constructor(private httpClient: HttpClient) { }

}
