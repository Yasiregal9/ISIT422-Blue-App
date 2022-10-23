import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantregformComponent } from './plantregform/plantregform.component';
import { PlantupdateformComponent } from './plantupdateform/plantupdateform.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantregformComponent,
    PlantupdateformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
