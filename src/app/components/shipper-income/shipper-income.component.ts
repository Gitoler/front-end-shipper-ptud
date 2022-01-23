import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/share/auth/auth.service';

@Component({
  selector: 'app-shipper-income',
  templateUrl: './shipper-income.component.html',
  styleUrls: ['./shipper-income.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShipperIncomeComponent implements OnInit {
  constructor(private auth: AuthService) {}
  ngOnInit(): void {};
}
