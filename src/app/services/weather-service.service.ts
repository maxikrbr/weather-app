import { WeatherDataTypes } from './../models/weather.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherApiBaseUrl: string = 'https://open-weather13.p.rapidapi.com/city/'

  constructor(private http: HttpClient) { }

  getWeatherData(cityname: string): Observable<WeatherDataTypes>{
    return this.http.get<WeatherDataTypes>(`https://open-weather13.p.rapidapi.com/city/${cityname}`, {
      headers: {
        "X-RapidAPI-Key": "f710678e6amshee63ee788afb892p14d0dejsn13e3f72a18cb",
        "X-RapidAPI-Host": "open-weather13.p.rapidapi.com"
      }
    })
  }
}
