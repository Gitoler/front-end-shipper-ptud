import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/share/auth/auth.service';

@Component({
  selector: 'app-shipper-shipping',
  templateUrl: './shipper-shipping.component.html',
  styleUrls: ['./shipper-shipping.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShipperShippingComponent implements OnInit {
  constructor(private auth: AuthService) {}
  ngOnInit(): void {};
}
