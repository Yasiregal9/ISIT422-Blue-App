import { Injectable } from '@angular/core';
import {UserPlant} from './userPlant'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserPlantService {

  constructor(private http: HttpClient) { }

  private userPlantUrl: string = 'http://localhost:3000/userplant';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  addNewUserPlant(plant: UserPlant): Observable<UserPlant> {
    console.log("service received "+plant.plantUserName);
   return(this.http.post<UserPlant>(this.userPlantUrl, plant, this.httpOptions));
  }

  getTest(): Observable<UserPlant[]> {
    return this.http.get<UserPlant[]>(this.userPlantUrl);
  }



}
