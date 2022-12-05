import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatheralertsComponent } from './weatheralerts/weatheralerts.component';
import { WEATHER_API_KEY } from './weatherapiconst';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
weatherInfo;

    constructor(private http:HttpClient) {
    }

    getWeather(zip: string){
        let param = new HttpParams();
        param = param.append("location", zip);
        let headers = new HttpHeaders({
            'x-rapidapi-host':  'yahoo-weather5.p.rapidapi.com',
            'x-rapidapi-key': WEATHER_API_KEY
        });

        let response = 
        this.http.get<any>('https://yahoo-weather5.p.rapidapi.com/weather', {
                headers: headers,
                params: param
            });
        return response;
    }
}


