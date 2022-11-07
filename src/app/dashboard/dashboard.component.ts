import { Component, OnInit } from '@angular/core';
import { UserPlantService } from '../user-plant.service';
import { UserPlant } from '../userPlant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
[x: string]: any;
  userPlants: UserPlant[];
  loggedIn: boolean = false;
  currentUser: string = 'Please Log In';
  picVar: string = "/assets/plants2.jpg";

  constructor(private userPlantService: UserPlantService) { }

  ngOnInit(): void {

    if(sessionStorage.getItem('ID:') === null){
      this.loggedIn = false;
    }
      else {
        this.loggedIn = true;
        this.currentUser = 'Welcome ' + sessionStorage.getItem('Name:');
        this.picVar =  sessionStorage.getItem('Picture:');
        this.getUserPlants();
      }
  }

  getUserPlants(): void {
    this.userPlantService.getUserPlants().subscribe(result => this.userPlants = result);
  }

}
