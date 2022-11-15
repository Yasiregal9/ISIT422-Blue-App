import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantregformComponent } from './plantregform/plantregform.component';
import { PlantupdateformComponent } from './plantupdateform/plantupdateform.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlantinfoComponent } from './plantinfo/plantinfo.component';
import { UserPlantDetailsComponent } from './user-plant-details/user-plant-details.component';
import { WeatheralertsComponent } from './weatheralerts/weatheralerts.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantregformComponent,
    PlantupdateformComponent,
    LoginComponent,
    DashboardComponent,
    PlantinfoComponent,
    UserPlantDetailsComponent,
    WeatheralertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor (private http:HttpClient) {}


 }
