import { Injectable } from '@angular/core';
import {UserPlant} from './userPlant'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UpdatePlant } from './updatePlant';

@Injectable({
  providedIn: 'root'
})
export class UserPlantService {

  constructor(private http: HttpClient) { }

  //private userPlantsUrl: string = 'http://localhost:3000/userplant';
  //private oneUserPlantUrl: string = 'http://localhost:3000/oneuserplant';
  //private getUpdatesUrl: string = 'http://localhost:3000/getupdates';
  private userPlantsUrl: string = 'https://phyteclubserver.azurewebsites.net/userplant';
  private oneUserPlantUrl: string = 'https://phyteclubserver.azurewebsites.net/oneuserplant';
  private getUpdatesUrl: string = 'https://phyteclubserver.azurewebsites.net/getupdates';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  addNewUserPlant(plant: UserPlant): Observable<UserPlant> {
    console.log("service received "+plant.plantUserName);
   return(this.http.post<UserPlant>(this.userPlantsUrl, plant, this.httpOptions));
  }

  //Once user sign-in is implemented, pass userid to server and only get user plants
  getUserPlants(): Observable<UserPlant[]> {
    return this.http.get<UserPlant[]>(this.userPlantsUrl);
  }

  getOneUserPlant(plantID: String): Observable<UserPlant> {
    return this.http.get<UserPlant>(this.oneUserPlantUrl+"/"+plantID);
  }

  getPlantUpdates(plantID: String): Observable<UpdatePlant[]> {
    return this.http.get<UpdatePlant[]>(this.getUpdatesUrl+"/"+plantID);
  }

}
