import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InActiveUsersComponent } from './in-active-users/in-active-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InActiveUsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
