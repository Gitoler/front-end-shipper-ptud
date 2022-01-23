import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { JwtModule } from '@auth0/angular-jwt';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
import { ProgressBarModule } from 'angular-progress-bar';
import { MatIconModule } from '@angular/material/icon';

//Component
import { SpinnerComponent } from './share/spinner/spinner.component';
import { AppComponent } from './app.component';
import { OrderComponent } from './components/order/order.component';
import { AppRoutingModule } from './app-routing.module';
import { OrderRowComponent } from './components/order/order--row/order--row.component';
import { SideboardComponent } from './share/sideboard/sideboard.component';
import { HeaderStoreComponent } from './share/header-store/header-store.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShipperProfileComponent } from './components/shipper-profile/shipper-profile.component';
import { ShipperComponent } from './components/shipper/shipper.component';
import { ShipperVerifyComponent } from './components/shipper-verify/shipper-verify.component';
import { ShipperReceiverComponent } from './components/shipper-receiver/shipper-receiver.component';
import { ShipperPasswordComponent } from './components/shipper-password/shipper-password.component';
import { ShipperShippingComponent } from './components/shipper-shipping/shipper-shipping.component';
import { ShipperIncomeComponent } from './components/shipper-income/shipper-income.component';

// Service
import { AuthService } from './share/auth/auth.service';
import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';

export function tokenGetter() {
  return localStorage.getItem("contact-manager-jwt");
}
@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    OrderComponent,
    OrderRowComponent,
    SideboardComponent,
    HeaderStoreComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    ShipperProfileComponent,
    ShipperComponent,
    ShipperVerifyComponent,
    ShipperReceiverComponent,
    ShipperPasswordComponent,
    ShipperShippingComponent,
    ShipperIncomeComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule,
    NgxSpinnerModule,
    HttpClientModule,
    MatDatepickerModule,
    FormsModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatRadioModule,
    CarouselModule,
    MatCardModule,
    NgbDropdownModule,
    MatProgressSpinnerModule,
    MatIconModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["https://localhost:44349"],
        disallowedRoutes: []
      }
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    ProgressBarModule
  ],
  providers: [AuthService, AuthGuard, { provide: BUCKET, useValue: 'ptud-94f91.appspot.com' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
