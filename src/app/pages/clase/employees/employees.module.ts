import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {FormComponent} from "./form/form.component";
import {EmployeesComponent} from "./employees.component";
import {EmployeesRoutingModule} from "./employees-routing.module";



@NgModule({
  declarations: [
    EmployeesComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
