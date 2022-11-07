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
  userId = sessionStorage.getItem('ID:');

  constructor(private userPlantService: UserPlantService) { }

  ngOnInit(): void {
    this.getUserPlants();
  }

  getUserPlants(): void {
    this.userPlantService.getUserPlants().subscribe(result => {
      let filteredResult = result.filter(c => c.plantUserID == this.userId);
      this.userPlants = filteredResult;
    });
  }

}
