import { StepsComponent } from './components/steps/steps.component';
import { AuthComponent } from './auth.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecUpdateComponent } from './components/sec-update/sec-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'steps', pathMatch: 'full' },
  { path: 'steps', component: StepsComponent },
  { path: 'login-form', component: LoginFormComponent },
  { path: 'sec-update', component: SecUpdateComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
