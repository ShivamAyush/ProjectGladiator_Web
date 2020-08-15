import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountTypeComponent } from './account-Type/account-type.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountTypeComponent,
    AccountSummaryComponent,
    AccountStatementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AccountStatementComponent]
})
export class AppModule { }
