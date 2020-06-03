import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftApplicationComponent } from './left-application/left-application.component';
import { RightApplicationComponent } from './right-application/right-application.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftApplicationComponent,
    RightApplicationComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
