import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ForgetPasswordComponent } from "./ForgetPassword";
import { SetPasswordComponent } from "./setPaasword";
import { InternetBankingComponent } from "./InternetBanking";
import { SessionExpiredComponent } from './session-expired/session-expired.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import {  ForgetUserIdComponent} from "./ForgetUserId";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
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


const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
{
  path:'homeLink',component:HomeComponent
},
{
  path:'loginLink',component:LoginComponent
},
{
  path: 'registerLink',component:RegisterComponent
},
{
path:'forgetpasswordLink',component:ForgetPasswordComponent
},
{
path:'forgetUserIdLink' , component:ForgetUserIdComponent
},
{
  path:'setPaaswordLink',component:SetPasswordComponent
},
{
  path:'internetBankingLink',component:InternetBankingComponent
},
{
  path:'sessionTimeout',component:SessionExpiredComponent
},
{
  path:'accountStatement',component:AccountStatementComponent
},
{
  path:"changePasswordLink",component:ChangePasswordComponent
},
{
  path:"AdminLoginLink" ,component:AdminLoginComponent
},
{
  path:'AccountTypeLink',component:AccountTypeComponent
},
{
  path:'AccountSummaryLink',component:AccountSummaryComponent
},
{
  path:'AccountLockLink',component:AccountLockedComponent
},
{
  path:'AdminDashBoardLink',component:AdminDashBoardComponent
},
{
  path:'complaintLink',component:ComplaintComponent
},
{
  path:'complainStatusLink',component:ComplaintStatusComponent
},
{
  path:'fundTransferLink',component:FundTransferComponent
},
{
  path:'preLoginLink',component:PreLoginComponent
},
{
  path:'userDashBoardLink',component:UserDashboardComponent
},
{
  path:'userProfile',component:UserProfileComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
