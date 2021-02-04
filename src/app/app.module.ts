import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedheadComponent } from './medicio/medhead/medhead.component';
import { Med1Component } from './medicio/med1/med1.component';
import { Med2Component } from './medicio/med2/med2.component';
import { Med3Component } from './medicio/med3/med3.component';
import { Med4Component } from './medicio/med4/med4.component';
import { Med5Component } from './medicio/med5/med5.component';
import { Med6Component } from './medicio/med6/med6.component';
import { Med7Component } from './medicio/med7/med7.component';
import { MedmergeComponent } from './medicio/medmerge/medmerge.component';
import { Med8Component } from './medicio/med8/med8.component';
import { MedtailComponent } from './medicio/medtail/medtail.component';

@NgModule({
  declarations: [
    AppComponent,
    MedheadComponent,
    Med1Component,
    Med2Component,
    Med3Component,
    Med4Component,
    Med5Component,
    Med6Component,
    Med7Component,
    MedmergeComponent,
    Med8Component,
    MedtailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
