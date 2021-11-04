import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DirectivaComponent} from "./directiva.component";
import {DirectivaRoutingModule} from "./directiva-routing.module";



@NgModule({
  declarations: [DirectivaComponent],
  imports: [
    CommonModule,
    DirectivaRoutingModule
  ]
})
export class DirectivaModule { }
