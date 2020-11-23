import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthComponent } from './auth.component';



@NgModule({
  declarations: [AuthComponent],
  imports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [AuthComponent]
})
export class AuthenticationModule { }
