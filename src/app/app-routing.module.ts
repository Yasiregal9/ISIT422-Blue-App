import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantregformComponent } from './plantregform/plantregform.component';
import { PlantupdateformComponent } from './plantupdateform/plantupdateform.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'plantregister', component: PlantregformComponent },
  { path: 'plantupdate', component: PlantupdateformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }