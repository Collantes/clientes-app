import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientes-app';
  saludo: string = "Hola Mundo";

  curso: string = "Curso de Lenguaje de Programación II";
  profesor: string= 'Hitler Collantes';

  autor: any = {nombre: 'Hitler', apellido: 'Collantes'}
}
