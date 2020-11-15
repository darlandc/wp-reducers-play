import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthComponent } from './auth.component';
import { BrowserModule } from '@angular/platform-browser';
// import { RoutingModule } from './routing.module';
import { NgModule } from '@angular/core';
import { SecUpdateComponent } from './components/sec-update/sec-update.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AuthComponent, SecUpdateComponent, LoginFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [AuthComponent, SecUpdateComponent, LoginFormComponent]
})
export class AuthModule { }

