import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/share/auth/auth.service';

@Component({
  selector: 'app-shipper-receiver',
  templateUrl: './shipper-receiver.component.html',
  styleUrls: ['./shipper-receiver.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShipperReceiverComponent implements OnInit {
  constructor(private auth: AuthService) {}
  ngOnInit(): void {};
}
