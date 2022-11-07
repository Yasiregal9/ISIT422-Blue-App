import { Component, OnInit, Input } from '@angular/core';
import { UserPlant } from '../userPlant';

@Component({
  selector: 'app-user-plant-details',
  templateUrl: './user-plant-details.component.html',
  styleUrls: ['./user-plant-details.component.css']
})
export class UserPlantDetailsComponent implements OnInit {
  userPlant: UserPlant
  constructor() { }

  ngOnInit(): void {
  }

}
