import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-weatheralerts',
  templateUrl: './weatheralerts.component.html',
  styleUrls: ['./weatheralerts.component.css']
})
export class WeatheralertsComponent implements OnInit {
  weatherInfo;
  constructor(public  http: HttpClient, private weatherService: WeatherService ) {}
	ngOnInit(): void {
};

weatherFunction() {
	let zipInput = document.getElementById("Userzip") as HTMLInputElement;
  let zipcode = zipInput.value;	
  this.weatherService.getWeather(zipcode).subscribe(data=>{this.weatherInfo = data;  console.log(this.weatherInfo);
  });
}	

}


