import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/share/auth/auth.service';
@Component({
  selector: 'app-shipper-profile',
  templateUrl: './shipper-profile.component.html',
  styleUrls: ['./shipper-profile.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShipperProfileComponent implements OnInit {
  constructor(private auth: AuthService) {}
  ngOnInit(): void {};
}
