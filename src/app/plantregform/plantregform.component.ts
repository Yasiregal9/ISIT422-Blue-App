import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantregform',
  templateUrl: './plantregform.component.html',
  styleUrls: ['./plantregform.component.css']
})
export class PlantregformComponent implements OnInit {

  plant: string[] = [];

  constructor() { }

  onClickSubmit(data) {
    this.plant.push(data.name);
    this.plant.push(data.species);
    this.plant.push(data.commonname);
    this.plant.push(data.startheight);
    this.plant.push(data.startwidth);
    this.plant.push(data.source);
    console.log(this.plant)
 }

  ngOnInit(): void {
    
  }

}
