import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { HomeComponent } from './view/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class ContactUsModule { }
