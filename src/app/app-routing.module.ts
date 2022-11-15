import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantregformComponent } from './plantregform/plantregform.component';
import { PlantupdateformComponent } from './plantupdateform/plantupdateform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlantinfoComponent } from './plantinfo/plantinfo.component';
import { UserPlantDetailsComponent } from './user-plant-details/user-plant-details.component';
import { InfoPlantDetailsComponent } from './info-plant-details/info-plant-details.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'plantregister', component: PlantregformComponent },
  { path: 'plantupdate', component: PlantupdateformComponent },
  { path: 'plantinfo', component: PlantinfoComponent },
  { path: 'plantdetails/:id', component: UserPlantDetailsComponent },
  { path: 'plantinfodetails/:id', component: InfoPlantDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
