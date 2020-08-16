import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PreLoginComponent } from './pre-login/pre-login.component';


import { FormsModule } from '@angular/forms';
//import { AccountDetailsComponent } from './account-details/account-details.component';
//import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    PreLoginComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
