import { Component, OnInit } from '@angular/core';
import { NAVIGATION } from '../../constants/variables.contants';
import { ListenerService } from '../../services/listener.service';
import { ROUTES } from './shipper.constant';


@Component({
  selector: 'app-shipper',
  templateUrl: './shipper.component.html',
  styleUrls: ['./shipper.component.scss'],
})
export class ShipperComponent implements OnInit {
  itemPage = NAVIGATION;
  routes = ROUTES;
  sideboardName = "Quản lý Shipper"
  activePage = '';
  status = 1;

  constructor(private listenerService: ListenerService) { }

  ngOnInit(): void {
    this.activePage = 'Thông tin cá nhân';
    this.listenerService.status.subscribe(data => {
      this.status = data;
    })
    this.getPage();
  }

  getPage() {
    this.listenerService.titleHeader.subscribe((data) => {
      this.activePage = data;
      console.log(data);
    });
  }
}
