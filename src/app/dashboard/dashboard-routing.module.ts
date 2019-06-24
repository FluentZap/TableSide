import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCategoryComponent } from './add-category/add-category.component';

const dashRoutes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'add', component: AddCategoryComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }