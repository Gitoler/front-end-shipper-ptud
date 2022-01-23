import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShipperComponent } from './components/shipper/shipper.component';
import { ShipperProfileComponent } from './components/shipper-profile/shipper-profile.component';
import { ShipperVerifyComponent } from './components/shipper-verify/shipper-verify.component';
import { ShipperReceiverComponent } from './components/shipper-receiver/shipper-receiver.component';
import { ShipperPasswordComponent } from './components/shipper-password/shipper-password.component';
import { ShipperShippingComponent } from './components/shipper-shipping/shipper-shipping.component';
import { ShipperIncomeComponent } from './components/shipper-income/shipper-income.component';
const routes: Routes = [
  { path: 'order', component: OrderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'manage/shipper',
    component: ShipperComponent,
    children: [
      { path: 'profile', component: ShipperProfileComponent },
      { path: 'verify', component: ShipperVerifyComponent },
      { path: 'receiver', component: ShipperReceiverComponent },
      { path: 'password', component: ShipperPasswordComponent },
      { path: 'shipping', component: ShipperShippingComponent },
      { path: 'income', component: ShipperIncomeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
