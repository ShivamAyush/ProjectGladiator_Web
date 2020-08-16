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
import { ComplaintComponent } from './complaint/complaint.component';
import { ComplaintStatusComponent } from './complaint-status/complaint-status.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';

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
  path:'fundtransfer',component:FundTransferComponent
},
{
  path:'complaint',component:ComplaintComponent
},
{
  path:'complaintstatus',component:ComplaintStatusComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
