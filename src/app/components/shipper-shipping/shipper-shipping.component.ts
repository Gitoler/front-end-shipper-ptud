
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/share/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Invoice } from '../../interfaces/interfaces';


import { DeliRequestService } from "../../services/deli-request.service"

@Component({
  selector: 'app-shipper-shipping',
  templateUrl: './shipper-shipping.component.html',
  styleUrls: ['./shipper-shipping.component.scss'],
})
export class ShipperShippingComponent implements OnInit {
  constructor(private auth: AuthService, private deliRequest: DeliRequestService) { }
  ids: any = [];
  invoices: any = [];
  invoice: any;
  invoiceWithDistance: any = [];
  invoiceWithDistanceDone: any = [];
  currentUser: any;
  shipperID = '';
  shipperStatus: any;

  getInvoiceList(shipperId: string) {
    this.deliRequest.GetListInvoiceByShipper(shipperId).subscribe(data => {
      for (const iterator of data) {
        this.ids.push({ shippervandon: iterator._id, id: iterator.vandonid, khoangcach: iterator.khoangcach, trangthai: iterator.trangthai })
      }
      for (const iterator of this.ids) {
        this.deliRequest.GetDetailInvoiceById(iterator.id).subscribe(data => {
          this.invoices.push(data);
          for (let iterator of this.ids) {
            if (data[0]?.id == iterator?.id && iterator.trangthai == "Đã nhận") {
              iterator.tongTien = data[0].tongTien.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
              this.invoiceWithDistance.push(iterator)
              break;
            }
          }
        })
      }
    })
  }

  changeShipperVanDonStatusSuccess(id: string, status: string, vandonid: string) {
    alert(status)
    this.deliRequest.ChangeShipperStatusById(id, status).subscribe(
      data => {
        this.ids = [];
        this.invoices = [];
        this.invoiceWithDistance = [];
        this.invoiceWithDistanceDone = [];
        this.getInvoiceList(this.shipperID)
        this.getInvoiceById(vandonid)
        console.log(this.invoice)
        console.log("update ")
        this.updateInvoiceSuccessById(vandonid, this.invoice?.shipper)
        console.log(vandonid)
        console.log(this.invoice)

      }
    )
    this.deliRequest.ChangeShipperStatusesById(id, vandonid).subscribe(
      data => {
        this.ids = [];
        this.invoices = [];
        this.invoiceWithDistance = [];
        this.invoiceWithDistanceDone = [];
        this.getInvoiceList(this.shipperID)
      }
    )


  }

  changeShipperVanDonStatusFail(id: string, status: string, vandonid: string) {
    alert(status)
    this.deliRequest.ChangeShipperStatusById(id, status).subscribe(
      data => {
        this.ids = [];
        this.invoices = [];
        this.invoiceWithDistance = [];
        this.invoiceWithDistanceDone = [];
        this.getInvoiceList(this.shipperID)
        this.getInvoiceById(vandonid)
        console.log(this.invoice)
        console.log("update ")
        this.updateInvoiceSuccessById(vandonid, this.invoice?.shipper)
        console.log(vandonid)
        console.log(this.invoice)

      }
    )
    this.deliRequest.ChangeShipperStatusesById(id, vandonid).subscribe(
      data => {
        this.ids = [];
        this.invoices = [];
        this.invoiceWithDistance = [];
        this.invoiceWithDistanceDone = [];
        this.getInvoiceList(this.shipperID)
      }
    )


  }

  getInvoiceById(id: string) {
    this.deliRequest.GetInvoiceById(id).subscribe(data => {
      data.tinhTrang = "Đang giao"
      this.invoice = data;
    })
  }

  updateInvoiceById(id: string, shipper: string) {
    this.deliRequest.UpdateInvoiceById(id, shipper).subscribe()
  }
  updateInvoiceSuccessById(id: string, shipper: string) {
    this.deliRequest.UpdateInvoiceSuccessById(id, shipper).subscribe()
  }
  updateInvoiceFailById(id: string, shipper: string) {
    this.deliRequest.UpdateInvoiceFailById(id, shipper).subscribe()
  }
  // 
  ngOnInit(): void {
    this.currentUser = this.auth.getUser();
    this.shipperID = this.currentUser._id;
    this.shipperStatus = this.currentUser.trangThaiHoatDong;
    this.getInvoiceList(this.shipperID);

  }

}

