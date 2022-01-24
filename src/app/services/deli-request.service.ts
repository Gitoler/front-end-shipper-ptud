import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DeliRequestService {

  constructor(private httpClient: HttpClient) { }

  GetListInvoiceByShipper(id: string): Observable<any> {
    return this.httpClient.get(
      `https://localhost:44349/api/shippervandon/${id}`
    );
  }
  GetDetailInvoiceById(id: string): Observable<any> {
    return this.httpClient.get(
      `https://localhost:44349/api/donhang/${id}`
    );
  }
}
