import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PlantInfo } from './plantInfo';

@Injectable({
  providedIn: 'root',
})
export class PlantInfoService {
  selectedLatinName: String;

  constructor(private http: HttpClient) {}

  private infoPlantUrl: string = 'http://localhost:3000/plantinfo';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAllPlants(): Observable<PlantInfo[]> {
    return this.http.get<PlantInfo[]>(this.infoPlantUrl);
  }

  getOnePlant(id: Number): Observable<PlantInfo> {
    return this.http.get<PlantInfo>(this.infoPlantUrl + '/' + id);
  }

  setLatinName(latin: String) {
    this.selectedLatinName = latin;
  }

  getLatinName(){
    return this.selectedLatinName;
  }

}
