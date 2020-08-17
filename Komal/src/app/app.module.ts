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
import {  ForgetUserIdComponent} from "./ForgetUserId";
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {AccountTypeComponent  } from "./account-Type/account-type.component";
import { AccountSummaryComponent } from "./account-summary/account-summary.component";
import { AccountLockedComponent } from "./account-locked/account-locked.component";
import { AdminDashBoardComponent } from "./admin-dash-board/admin-dash-board.component";
import { ComplaintComponent } from "./complaint/complaint.component";
import { ComplaintStatusComponent } from "./complaint-status/complaint-status.component";
import { FundTransferComponent } from "./fund-transfer/fund-transfer.component";
import { PreLoginComponent } from "./pre-login/pre-login.component";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { VisitorStatusComponent } from "./visitor-status/visitor-status.component";
import { AddBeneficiaryComponent } from "./add-beneficiary/add-beneficiary.component";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ForgetPasswordComponent,
    ForgetUserIdComponent,
    SetPasswordComponent,
    InternetBankingComponent,
    SessionExpiredComponent,
    AccountStatementComponent,
    ChangePasswordComponent,
    AdminLoginComponent,
    AccountTypeComponent,
    AccountSummaryComponent,
    ComplaintStatusComponent,
    UserProfileComponent,
    PreLoginComponent ,
    FundTransferComponent ,
    UserDashboardComponent,
    AccountLockedComponent,
    ComplaintComponent,
    AdminDashBoardComponent,
    AddBeneficiaryComponent,
    VisitorStatusComponent

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
