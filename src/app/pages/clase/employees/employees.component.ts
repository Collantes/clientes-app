import { Component, OnInit } from '@angular/core';
import { employees } from './employees.json';
import {EmployeeService} from "../../../providers/services/employee.service";
import {FormComponent} from "./form/form.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: any[] = [];
  constructor(private employeeService: EmployeeService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getAll$().subscribe(response => {
      console.log(response);
      this.employees = response.data || [];
    });
  }

  openModal(): any {
    const modal = this.modalService.open(FormComponent, {
      size: 'lg',
      keyboard: false,
      backdrop: 'static'
    });
    // modal.componentInstance.arreglo = item;
    modal.componentInstance.title = 'Nuevo';
    modal.result.then(res => {
      if (res.success) {
        // @ts-ignore
        Swal.fire({
          title: 'Empleado',
          text: `${res.message}`,
          icon: 'success',
          confirmButtonColor: '#7f264a',
          timer: 1500
        });
        this.getEmployees();
      }
    }).catch(res => {
    });
  }

  openModalEdit(item: any): any {
    const modal = this.modalService.open(FormComponent, {
      size: 'lg',
      keyboard: false,
      backdrop: 'static'
    });
    modal.componentInstance.id_employee = item.id_employee;
    modal.componentInstance.item = item;
    modal.componentInstance.title = 'Modificar';
    modal.result.then(res => {
      if (res.success) {
        this.getEmployees();
        //swal.fire('Empleado',`${res.message}`, 'success')
        Swal.fire({
          title: 'Empleado',
          text: `${res.message}`,
          icon: 'success',
          confirmButtonColor: '#7f264a',
          timer: 1500
        });
      }
    }).catch(res => {
    });
  }

  public onDelete(item: any): void {
    const ID = item.idEmployee;
    const mensaje = '¿ Desea eliminar? : ' + ' ' + item.firstName;
    if (ID) {
      Swal.fire({
        title: 'Se eliminará el registro',
        text: `${mensaje}`,
        backdrop: true,
        //animation: true,
        showCloseButton: true,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: '#7f264a',
        confirmButtonText: 'Estoy de acuerdo!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {
          this.employeeService.delete$(ID).subscribe(data => {
            if (data.success) {
              Swal.fire({
                title: 'Eliminado',
                text: data.message,
                backdrop: true,
                //animation: true,
                showConfirmButton: false,
                confirmButtonColor: '#7f264a',
                timer: 1500,
              });
            this.getEmployees();
            }
          });
        }
      });
    }
  }
}
/*
*
Swal.fire({
      title: '¿Estas Seguro?',
      text: "Se eliminara permanentemente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Estoy de acuerdo!'
    }).then((result) => {
      if (result.value) {
        this.purchasesPendingService.delteProvision$(item.id_pedido).subscribe( re => {
          if (re.success) {
            this.requestData(this.id_pedido);
            this.verifyDeleteProv();
            Swal.fire({
              title: 'Eliminado!',
              text: `Tu archivo fue eliminado correctamente.`,
              icon: 'success',
              confirmButtonColor: '#7f264a',
              timer: 2500
            });
          }
        });
      }
    })
* */
