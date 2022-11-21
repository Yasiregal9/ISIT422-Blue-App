import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserPlant } from '../userPlant';
import { UserPlantService } from '../user-plant.service';
import { UpdatePlant } from '../updatePlant';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-user-plant-details',
  templateUrl: './user-plant-details.component.html',
  styleUrls: ['./user-plant-details.component.css']
})

export class UserPlantDetailsComponent implements OnInit {
  userPlant: UserPlant
  updateArray: UpdatePlant[]
  sizeChart: Chart
  healthChart: Chart

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
    this.userPlantService.getPlantUpdates(id).subscribe(updateArray => {
      this.updateArray = updateArray;
      this.getCharts();
    });
  }

  getCharts(){
    //fill data arrays
    let dateArray: String[] = [];
    let heightArray: Number[] = [];
    let widthArray: Number[] = [];
    let healthArray: Number[] = [];
    let commentArray: String[] = [];
    this.updateArray.forEach(function(update){
      dateArray.push(update.updateDate);
      heightArray.push(update.updateCurrentHeight);
      widthArray.push(update.updateCurrentWidth);
      healthArray.push(update.updateCurrentHealth);
      commentArray.push(update.updateComment);
    });
    

    this.sizeChart = new Chart("SizeChart", {
      type: 'line', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: dateArray, 
	       datasets: [
          {
            label: "Height (inches)",
            data: heightArray,
            borderColor: 'blue'
          },
          {
            label: "Width (inches)",
            data: widthArray,
            borderColor: 'red'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
    });
    this.healthChart = new Chart("HealthChart", {
      type: 'line', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: dateArray, 
	       datasets: [
          {
            label: "Health",
            data: healthArray,
            borderColor: 'green'
          },
        ]
      },
      options: {
        aspectRatio:2.5
      }
    });
  }

}
