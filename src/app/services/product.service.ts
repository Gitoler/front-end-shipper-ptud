import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly apiURL = 'https://localhost:44349/api/sanpham';

  constructor(private http: HttpClient) {}

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(this.apiURL + `/${id}`);
  }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL);
  }
}
