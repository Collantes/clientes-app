import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {FormComponent} from "./form/form.component";
import {EmployeesComponent} from "./employees.component";
import {EmployeesRoutingModule} from "./employees-routing.module";
import {EmployeeService} from "../../../providers/services/employee.service";



@NgModule({
  declarations: [
    EmployeesComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeesRoutingModule
  ],
  providers: [EmployeeService], // Los servicios se ponen en providers
})
export class EmployeesModule { }
