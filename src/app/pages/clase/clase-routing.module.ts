import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ClaseComponent} from "./clase.component";

const routes: Routes = [
  {
    path: '',
    component: ClaseComponent,
    children: [
      {
        path: 'empleados',
        loadChildren: () => import('src/app/pages/clase/employees/employees.module')
          .then(m => m.EmployeesModule),
      },
      {
        path: 'directivas',
        loadChildren: () => import('src/app/pages/clase/directiva/directiva.module')
          .then(m => m.DirectivaModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaseRoutingModule {
}
