import { TranslocoRootModule } from './../../transloco-root.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

const routes = [
  {
      path     : 'dashboard',
      component: DashboardComponent
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TranslocoRootModule,
    //material
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
