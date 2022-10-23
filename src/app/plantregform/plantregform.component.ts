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

  constructor(private userPlantService: UserPlantService) { }

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

    //hard code user ID. Replace with google user ID later.
    this.newPlant.plantUserID = 'testUser';

    this.userPlantService.addNewUserPlant(this.newPlant).subscribe();
 }

  ngOnInit(): void {
    
  }

  showRandomName() {

    const arr = ['Sweetie', 'Dumpling', 'Button', 'Noodle', 'Majesty', 'Bugsy', 'Bug Eater', 'Amy', 'Blossom', 'Bud', 'Chloe', 'Emerald', 'Minnie', 'Pearl', 'Sage',
      'Verde', 'Sylvia', 'Goldie', 'Groot', 'Vincent Van Grow'];

    const random = arr[Math.floor(Math.random() * arr.length)];



    //let input = (document.getElementById("plantName") as HTMLInputElement).value = random;
    (document.getElementById("plantName") as HTMLInputElement).innerText = random;


  }



}
