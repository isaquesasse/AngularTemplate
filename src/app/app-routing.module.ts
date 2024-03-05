import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main/dashboard/dashboard.component';

const appRoutes: Routes = [
  //Dashboard
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  // {
  //   path: 'espaco',
  //   component: EspacoComponent,
  // },
  // {
  //   path: 'quem-somos',
  //   component: QuemSomosComponent,
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
