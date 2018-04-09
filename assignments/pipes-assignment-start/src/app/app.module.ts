import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReverseStringPipe } from './pipes/reverse-string.pipe';
import { OrderStatusPipe } from './pipes/order-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReverseStringPipe,
    OrderStatusPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
