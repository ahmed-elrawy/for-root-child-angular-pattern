import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PollingModule } from 'polling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PollingModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
