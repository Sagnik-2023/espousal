import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TexasRoutingModule } from './texas-routing.module';
import { HomeComponent } from './view/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TexasRoutingModule
  ]
})
export class TexasModule { }
