import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/share/auth/auth.service';

@Component({
  selector: 'app-shipper-verify',
  templateUrl: './shipper-verify.component.html',
  styleUrls: ['./shipper-verify.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShipperVerifyComponent implements OnInit {
  constructor(private auth: AuthService) {}
  ngOnInit(): void {};
}
