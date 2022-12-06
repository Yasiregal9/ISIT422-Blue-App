import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantregformComponent } from './plantregform/plantregform.component';
import { PlantupdateformComponent } from './plantupdateform/plantupdateform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlantinfoComponent } from './plantinfo/plantinfo.component';
import { UserPlantDetailsComponent } from './user-plant-details/user-plant-details.component';
import { WeatheralertsComponent } from './weatheralerts/weatheralerts.component';
import { InfoPlantDetailsComponent } from './info-plant-details/info-plant-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'plantregister', component: PlantregformComponent },
  { path: 'weather', component: WeatheralertsComponent},
  { path: 'plantinfodetails/:id', component: InfoPlantDetailsComponent },
  { path: 'plantupdate/:id', component: PlantupdateformComponent },
  { path: 'plantinfo', component: PlantinfoComponent},
  { path: 'plantdetails/:id', component: UserPlantDetailsComponent },
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
