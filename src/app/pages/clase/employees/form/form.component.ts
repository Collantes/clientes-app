import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {EmployeeService} from "../../../../providers/services/employee.service";
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  employee: any;
  @Input() item: any;
  @Input() id_employee: any;
  @Input() title: any;
  idEmployee: string;
  isUpdating: boolean;
  formGroup: FormGroup;
  constructor(public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.inicio();
    this.isUpdating = false;
    if (this.item) {
      this.updateData();
    } else {
      this.item = [];
      this.id_employee = '';
    }
    console.log(this.item);
  }

  private inicio(): any {
    const controls = {
      // idEmployee: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: [''],
      phoneNumber: [''],
      hireDate: [''],
      salary: [''],
      commissionPct: [''],
      depaId: [''],
    };
    this.formGroup = this.formBuilder.group(controls);
  }

  save(name: any): void {
    if (this.formGroup.invalid){
      this.formGroup.markAllAsTouched();
      return;
    }
    // this.formGroup.reset();
    const save: any = {
      firstName: name.firstName,
      lastName: name.lastName,
      email: name.email,
      phoneNumber: name.phoneNumber,
      hireDate: name.hireDate,
      salary: name.salary,
      commissionPct: name.commissionPct,
      estado: true,
      departament: {
        depaId: name.depaId
      }
    };
    this.employeeService.add$(save).subscribe(response => {
      if (response.success) {
        this.activeModal.close({ success: true, message: response.message });
      } else {
      }
    }, () => { }, () => {  });
  }

  update(name: any): void {
    if (this.formGroup.invalid){
      this.formGroup.markAllAsTouched();
      return;
    }
    // this.formGroup.reset();
    const save: any = {
      idEmployee: this.idEmployee,
      firstName: name.firstName,
      lastName: name.lastName,
      email: name.email,
      phoneNumber: name.phoneNumber,
      hireDate: name.hireDate,
      salary: name.salary,
      commissionPct: name.commissionPct,
      estado: this.item.estado,
      departament: {
        depaId: name.depaId
      }
    }
    this.employeeService.update$(this.idEmployee, save).subscribe(response => {
      if (response.success) {
        this.activeModal.close({ success: true, message: response.message });
      } else {
      }
    }, () => { }, () => {  });
  }

  updateData(): any {
    const data = this.item;
    this.isUpdating = true;
    this.idEmployee = data.idEmployee;
    this.formGroup.patchValue({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      hireDate: data.hireDate,
      salary: data.salary,
      commissionPct: data.commissionPct,
      depaId: data.depaId
    });
  }

  public func() {
    this.activeModal.close();
  }

  validaForm(campo: string) {
    return this.formGroup.controls[campo].errors &&
      this.formGroup.controls[campo].touched;
  }
}
