import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
interface User {
  _id: string,
  email: string,
  matkhat: string,
  loaiND: string
}
@Injectable()
export class AuthService {

  storageKey: string = 'contact-shipper-jwt';
  userKey: string = 'user-shipper-jwt';
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.getToken() !== null);
  private unLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.getToken() == null);
  constructor(private router: Router) { }

  setToken(token: string) {
    localStorage.setItem(this.storageKey, token);
  }

  // setUser(user: User) {
  //   localStorage.setItem('current', user);
  // }

  getToken() {
    return localStorage.getItem(this.storageKey);
  }

  AccessToken() {
    return new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem(this.storageKey),
      "Content-Type": "application/json"
    })
  }

  isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  isUnLoggedIn() {
    return this.unLoggedIn.asObservable();
  }

  saveUser(user: any): void {
    console.log(this.getUser())
    localStorage.removeItem(this.userKey);
    localStorage.setItem(this.userKey, JSON.stringify(user));
    console.log(this.getUser())
    this.loggedIn.next(this.getToken() !== null);
    this.unLoggedIn.next(this.getToken() == null);
  }

  getUser() {
    const currentUser: any = localStorage.getItem(this.userKey);
    return JSON.parse(currentUser);
  }

  logout() {
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem(this.userKey);
    this.loggedIn.next(this.getToken() !== null);
    this.unLoggedIn.next(this.getToken() == null);
    this.router.navigate(['/login']);
  }

}
