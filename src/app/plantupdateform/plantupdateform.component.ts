import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantupdateform',
  templateUrl: './plantupdateform.component.html',
  styleUrls: ['./plantupdateform.component.css']
})
export class PlantupdateformComponent implements OnInit {

    plant: string[] = [];
  
    constructor() { }
  
    onClickSubmit(data) {
      this.plant.push(data.date);
      this.plant.push(data.currentheight);
      this.plant.push(data.currentwidth);
      this.plant.push(data.health);
      this.plant.push(data.comment);
      console.log(this.plant)
   }
  
    ngOnInit(): void {
      
    }


}
