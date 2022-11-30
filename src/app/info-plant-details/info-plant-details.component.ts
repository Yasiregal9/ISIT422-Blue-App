import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { PlantInfoService } from '../plant-info.service';
import { PlantInfo } from '../plantInfo';

@Component({
  selector: 'app-info-plant-details',
  templateUrl: './info-plant-details.component.html',
  styleUrls: ['./info-plant-details.component.css'],
})
export class InfoPlantDetailsComponent implements OnInit {
  plant: PlantInfo;

  constructor(
    public service: PlantInfoService,
    private activatedRoute: ActivatedRoute
  ) {
    // subscribe to router event
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.service.getOnePlant(+params.get('id')).subscribe((onePlant) => {
        this.plant = onePlant;
      });
    });
  }

  ngOnInit(): void {}

  registerPlant() {
  this.service.setLatinName(this.plant.latin);
  }
}


