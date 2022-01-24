import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/share/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

import { DeliRequestService } from "../../services/deli-request.service"

@Component({
  selector: 'app-shipper-receiver',
  templateUrl: './shipper-receiver.component.html',
  styleUrls: ['./shipper-receiver.component.scss'],
})
export class ShipperReceiverComponent implements OnInit {
  constructor(private auth: AuthService, private deliRequest: DeliRequestService) { }
  ids: any = [];
  invoices: any = [];
  invoiceWithDistance: any = [];
  invoiceWithDistanceDone: any = [];



  getInvoiceList(shipperId: string) {
    this.deliRequest.GetListInvoiceByShipper(shipperId).subscribe(data => {
      for (const iterator of data) {
        this.ids.push({ id: iterator.vandonid, khoangcach: iterator.khoangcach, trangthai: iterator.trangthai })
      }
      for (const iterator of this.ids) {
        this.deliRequest.GetDetailInvoiceById(iterator.id).subscribe(data => {
          this.invoices.push(data);
          for (let iterator of this.ids) {
            if (data[0].id == iterator.id && iterator.trangthai == "Chưa nhận") {
              iterator.tongTien = data[0].tongTien.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
              this.invoiceWithDistance.push(iterator)
            }
          }
          for (let iterator of this.ids) {
            if (data[0].id == iterator.id && iterator.trangthai != "Chưa nhận") {
              iterator.tongTien = data[0].tongTien.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
              this.invoiceWithDistanceDone.push(iterator)
            }
          }

        })
      }



    })
  }
  // 
  ngOnInit(): void {
    this.getInvoiceList("61ecaf8d9b0dc1eba273c1de");
    console.log(this.ids)
    console.log(this.invoices)
    console.log(this.invoiceWithDistance)

  }

}
