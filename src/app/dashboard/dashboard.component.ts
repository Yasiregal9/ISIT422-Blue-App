import { Component, OnInit } from '@angular/core';
import { UserPlantService } from '../user-plant.service';
import { UserPlant } from '../userPlant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userPlants: UserPlant[];

  constructor(private userPlantService: UserPlantService) { }

  ngOnInit(): void {
    this.getUserPlants();
  }

  getUserPlants(): void {
    this.userPlantService.getUserPlants().subscribe(result => this.userPlants = result);
  }

}
