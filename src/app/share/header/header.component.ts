import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { ShipperService } from "../../services/shipper.service"
import { ListenerService } from "../../services/listener.service"


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  constructor(private listener: ListenerService, private http: HttpClient, private auth: AuthService, private router: Router, private shipper: ShipperService) { }
  isLoggedIn$: Observable<boolean> | undefined;
  isUnLoggedIn$: Observable<boolean> | undefined;
  shipperId: any;
  status: any;
  stringStatus: any;
  ngOnInit(): void {
    this.isLoggedIn$ = this.auth.isLoggedIn();
    this.isUnLoggedIn$ = this.auth.isUnLoggedIn();
    this.shipperId = this.auth.getUser()._id;

    this.status = this.auth.getUser().trangThaiHoatDong;
    console.log(this.auth.getUser())
    this.stringStatus = this.status ? "Hoạt động" : "Không hoạt động";
  }
  Logout() {
    this.auth.logout();
  }

  changeStatus() {
    let realStatus = this.status != 0 ? 0 : 1;
    this.auth.getUser().trangThaiHoatDong = realStatus;
    this.status = realStatus;
    this.shipper.changeStatus(realStatus, this.shipperId).subscribe(data => {
      this.auth.saveUser(data)
      this.stringStatus = data.trangThaiHoatDong == 1 ? "Hoạt động" : "Không hoạt động";
      this.status = data.trangThaiHoatDong;
      this.listener.getStatus(this.status)
    })
  }

}
