import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantregformComponent } from './plantregform/plantregform.component';
import { PlantupdateformComponent } from './plantupdateform/plantupdateform.component';

const routes: Routes = [
  { path: 'plantregister', component: PlantregformComponent },
  { path: 'plantupdate', component: PlantupdateformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }