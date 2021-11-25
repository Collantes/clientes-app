import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartamentComponent } from './departament.component';
import {DepartamentRoutingModule} from "./departament-routing.module";
import { FormModalComponent } from './form-modal/form-modal.component';
import {DepartamentService} from "../../../providers/services/departament.service";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    DepartamentComponent,
    FormModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DepartamentRoutingModule
  ],
  providers: [DepartamentService],
})
export class DepartamentModule { }
