import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Med1Component } from './medicio/med1/med1.component';
import { Med2Component } from './medicio/med2/med2.component';
import { Med3Component } from './medicio/med3/med3.component';
import { Med4Component } from './medicio/med4/med4.component';
import { Med5Component } from './medicio/med5/med5.component';
import { Med6Component } from './medicio/med6/med6.component';
import { Med7Component } from './medicio/med7/med7.component';
import { Med8Component } from './medicio/med8/med8.component';
import { MedheadComponent } from './medicio/medhead/medhead.component';
import { MedmergeComponent } from './medicio/medmerge/medmerge.component';
import { MedtailComponent } from './medicio/medtail/medtail.component';


const routes: Routes = [
  {path:'medhead', component:MedheadComponent},
  {path:'med1', component:Med1Component},
  {path:'med2', component:Med2Component},
  {path:'med3', component:Med3Component},
  {path:'med4', component:Med4Component},
  {path:'med5', component:Med5Component},
  {path:'med6', component:Med6Component},
  {path:'med7', component:Med7Component},
  {path:'medmerge', component:MedmergeComponent},
  {path:'med8', component:Med8Component},
  {path:'medtail', component:MedtailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
