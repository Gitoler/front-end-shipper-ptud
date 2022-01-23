import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListenerService {
  titleHeaderSource = new BehaviorSubject<string>("Thông tin cá nhân");
  titleHeader = this.titleHeaderSource.asObservable();

  constructor() { }

  getTitleHeader(message: string) {
    this.titleHeaderSource.next(message);
  }
}
