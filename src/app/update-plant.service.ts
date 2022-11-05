import { Injectable } from '@angular/core';
import {UpdatePlant} from './updatePlant'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdatePlantService {

  constructor(private http: HttpClient) { }

  private updatePlantUrl: string = 'http://localhost:3000/updateplant';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  UpdatePlant(plant: UpdatePlant): Observable<UpdatePlant> {
    console.log("plantID from service: "+ plant.plantID) //deleteme
    return(this.http.post<UpdatePlant>(this.updatePlantUrl, plant, this.httpOptions));
  }

  getTest(): Observable<UpdatePlant[]> {
    return this.http.get<UpdatePlant[]>(this.updatePlantUrl);
  }
}