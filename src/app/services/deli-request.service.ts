import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../interfaces/interfaces';

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
  ChangeShipperStatusById(id: string, status: string): Observable<any> {
    return this.httpClient.post(
      `https://localhost:44349/api/shippervandon/${id}`, { trangthai: status }
    );
  }

  ChangeShipperStatusesById(shipperid: string, vandonid: string): Observable<any> {
    return this.httpClient.post(
      `https://localhost:44349/api/shippervandon/update/${shipperid}`, { vandonid: vandonid }
    );
  }
  GetInvoiceById(id: string): Observable<any> {
    return this.httpClient.get(
      `https://localhost:44349/api/donhang/${id}`,
    );
  }
  UpdateInvoiceById(id: string, shipper: string): Observable<any> {
    return this.httpClient.post(
      `https://localhost:44349/api/donhang/${id}`, { shipper: "61b76361241874f48b599885" }
    );
  }

}
