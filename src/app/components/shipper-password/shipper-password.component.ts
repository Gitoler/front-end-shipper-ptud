import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/share/auth/auth.service';

@Component({
  selector: 'app-shipper-password',
  templateUrl: './shipper-password.component.html',
  styleUrls: ['./shipper-password.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShipperPasswordComponent implements OnInit {
  constructor(private auth: AuthService) {}
  ngOnInit(): void {};
}
