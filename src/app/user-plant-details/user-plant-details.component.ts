import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserPlant } from '../userPlant';
import { UserPlantService } from '../user-plant.service';
import { UpdatePlant } from '../updatePlant';

@Component({
  selector: 'app-user-plant-details',
  templateUrl: './user-plant-details.component.html',
  styleUrls: ['./user-plant-details.component.css']
})
export class UserPlantDetailsComponent implements OnInit {
  userPlant: UserPlant
  updateArray: UpdatePlant[]

  constructor(
    private route: ActivatedRoute,
    private userPlantService: UserPlantService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getUserPlant();
  }

  getUserPlant(){
    const id = this.route.snapshot.paramMap.get('id');
    this.userPlantService.getOneUserPlant(id).subscribe(userPlant => this.userPlant = userPlant);
    this.userPlantService.getPlantUpdates(id).subscribe(updateArray => this.updateArray = updateArray);
  }

}
