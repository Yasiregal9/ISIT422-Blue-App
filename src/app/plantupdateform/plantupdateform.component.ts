import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {UpdatePlantService} from '../update-plant.service'
import { UpdatePlant } from '../updatePlant';
@Component({
  selector: 'app-plantupdateform',
  templateUrl: './plantupdateform.component.html',
  styleUrls: ['./plantupdateform.component.css']
})
export class PlantupdateformComponent implements OnInit {

    plant: string[] = [];
    updatePlant: UpdatePlant;
    userId = sessionStorage.getItem('ID:');
    plantID: string;

  
    constructor(
      private route: ActivatedRoute,
      private updatePlantService: UpdatePlantService,
      private location: Location
    ) { }
  
    onClickSubmit(data) {
      console.log(data.plantID); //deleteme
      this.updatePlant = new UpdatePlant();
      this.updatePlant.plantID = this.plantID;
      console.log("plantID from form: "+this.updatePlant.plantID) //deleteme
      this.updatePlant.updateDate = data.date;
      this.updatePlant.updateCurrentHeight = +data.currentheight;
      this.updatePlant.updateCurrentWidth = +data.currentwidth;
      this.updatePlant.updateCurrentHealth = +data.health;
      this.updatePlant.updateComment = data.comment;
      console.log(this.updatePlant)

      this.updatePlantService.UpdatePlant(this.updatePlant).subscribe();
      this.location.back();
   }
  
    ngOnInit(): void {
      this.plantID = this.route.snapshot.paramMap.get('id');
    }


}
