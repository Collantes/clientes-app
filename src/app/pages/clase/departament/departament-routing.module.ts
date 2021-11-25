import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DepartamentComponent} from "./departament.component";

const routes: Routes = [
  {
    path: '',
    component: DepartamentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentRoutingModule {
}
