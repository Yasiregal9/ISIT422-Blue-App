import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-weatheralerts',
  templateUrl: './weatheralerts.component.html',
  styleUrls: ['./weatheralerts.component.css']
})
export class WeatheralertsComponent implements OnInit {

  weatherData = null;
  zip: number;

  constructor(private api: WeatherService) {}

  ngOnInit(): void {
    this.api.getWeather(this.zip,).subscribe((data)=>{
      this.weatherData = data;
});
  }

}


