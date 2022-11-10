import { Component, OnInit } from '@angular/core';
import plantsData from 'src/app/response.json';

interface Plantdata  {  
  id: Number;  
  latin: String;  
  family: String;  
 // common: String;  
  category: String;
  origin : String;
  climate: String;
 //tempmax: Number;
 //tempmin: Number;
  ideallight: String;
  toleratedlight: String;
  watering: String;
  //insects: String;
  //diseases: String;
  //use: String;
}  
@Component({
  selector: 'app-plantinfo',
  templateUrl: './plantinfo.component.html',
  styleUrls: ['./plantinfo.component.css']
})
export class PlantinfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


plantinfo:Plantdata[] = plantsData;  
}