import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-weatheralerts',
  templateUrl: './weatheralerts.component.html',
  styleUrls: ['./weatheralerts.component.css']
})
export class WeatheralertsComponent implements OnInit {
  weatherInfo;
  constructor(public  http: HttpClient) {}
	ngOnInit(): void {
		let param = new HttpParams();
		param = param.append("zip", "98012");
		let headers = new HttpHeaders({
			'x-rapidapi-host':  'us-weather-by-zip-code.p.rapidapi.com',
			'x-rapidapi-key': '5334301d9dmsh2b72b9ba1bcf600p1836e7jsn980172dd9dbd'
		});
		this.http
			.get<any>('https://us-weather-by-zip-code.p.rapidapi.com/getweatherzipcode', {
				headers: headers,
				params: param
			})
			.subscribe(data => {
				console.log(data);
				this.weatherInfo = data;
			});
};
  

}


