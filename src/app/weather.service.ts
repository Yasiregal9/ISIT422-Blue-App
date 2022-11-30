import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatheralertsComponent } from './weatheralerts/weatheralerts.component';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
weatherInfo;
  constructor(private http:HttpClient) {

   }
   getWeather(zip: string){
    let param = new HttpParams();
    param = param.append("zipcode", zip);
    let headers = new HttpHeaders({
        'x-rapidapi-host':  'weather-apis4.p.rapidapi.com',
        'x-rapidapi-key': '5334301d9dmsh2b72b9ba1bcf600p1836e7jsn980172dd9dbd'
    });
    let response = 
    this.http
        .get<any>('https://weather-apis4.p.rapidapi.com/weather', {
            headers: headers,
            params: param
        });
        return response;
   
    }


}


