import { AuthComponent } from './auth.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecUpdateComponent } from './components/sec-update/sec-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '', component: AuthComponent },
  { path: 'login-form', component: LoginFormComponent },
  { path: 'sec-update', component: SecUpdateComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
