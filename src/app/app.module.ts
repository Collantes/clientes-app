import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EmployeeService} from "./providers/services/employee.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {CommonModule} from "@angular/common";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {TokenInterceptor} from "./providers/interceptors/token.interceptor";
import {AuthInterceptor} from "./providers/interceptors/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },], // Los servicios se ponen en providers
  bootstrap: [AppComponent]
})
export class AppModule { }
