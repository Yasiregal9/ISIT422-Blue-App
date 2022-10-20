import { Injectable } from '@angular/core';
import {UserPlant} from './userPlant'

@Injectable({
  providedIn: 'root'
})
export class UserPlantService {

  constructor() { }

  addNewUserPlant(plant: UserPlant): void {
    //console.log(UserPlant);
  }
}
