import { Component, OnInit } from '@angular/core';
import {UserPlantService} from '../user-plant.service'
import { UserPlant } from '../userPlant';

@Component({
  selector: 'app-plantregform',
  templateUrl: './plantregform.component.html',
  styleUrls: ['./plantregform.component.css']
})
export class PlantregformComponent implements OnInit {

  plant: string[] = [];
  newPlant: UserPlant;

  constructor() { }

  onClickSubmit(data) {
    this.newPlant = new UserPlant();
    this.newPlant.plantUserName = data.name;
    this.newPlant.plantLatinName = data.species;
    this.newPlant.plantCommonName = data.commonname;
    this.newPlant.plantStartHeight = data.startheight;
    this.newPlant.plantCurrentHeight = data.startheight;
    this.newPlant.plantStartWidth = data.startwidth;
    this.newPlant.plantCurrentWidth = data.startwidth;
    this.newPlant.plantSource = data.source;
 }

  ngOnInit(): void {
    
  }

}
