import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shipper } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ShipperService {
  private readonly apiURL = 'https://localhost:44349/api/shipper';

  constructor(private http: HttpClient) { }

  getShipperById(id: string): Observable<Shipper> {
    return this.http.get<Shipper>(this.apiURL + `/${id}`);
  }

  getAllShipper(): Observable<Shipper[]> {
    return this.http.get<Shipper[]>(this.apiURL);
  }

  changeStatus(status: number, id: string): Observable<Shipper> {
    return this.http.post<Shipper>(this.apiURL + "/update/" + id, { trangThaiHoatDong: status });
  }

  uploadCus(cus: any): Observable<any> {
    return this.http.put<any>(this.apiURL, cus);
  }

}
