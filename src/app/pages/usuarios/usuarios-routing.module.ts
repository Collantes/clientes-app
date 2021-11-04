import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsuariosComponent} from "./usuarios.component";

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('src/app/pages/usuarios/login/login.module')
          .then(m => m.LoginModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule {
}
