import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspousalHomeRoutingModule } from './espousal-home-routing.module';
import { HomeComponent } from './view/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    EspousalHomeRoutingModule
  ]
})
export class EspousalHomeModule { }
