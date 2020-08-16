import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { MyApiServise } from "./myapi.service";
import {FormsModule} from  "@angular/forms";
import { ForgetPasswordComponent } from "./ForgetPassword";
import { SetPasswordComponent} from "./setPaasword";
import { InternetBankingComponent } from "./InternetBanking";
import { SessionExpiredComponent } from './session-expired/session-expired.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { ComplaintStatusComponent } from './complaint-status/complaint-status.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ForgetPasswordComponent,
    SetPasswordComponent,
    InternetBankingComponent,
    SessionExpiredComponent,
    AccountStatementComponent,
    ComplaintComponent,
    ComplaintStatusComponent,
    FundTransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MyApiServise],
  bootstrap: [AppComponent]
})
export class AppModule { }
