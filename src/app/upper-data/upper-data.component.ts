import { Component, OnInit } from '@angular/core';
import { WeatherDataTypes } from '../models/weather.model';
import { WeatherService } from '../services/weather-service.service';

@Component({
  selector: 'app-upper-data',
  templateUrl: './upper-data.component.html',
  styleUrls: ['./upper-data.component.css']
})
export class UpperDataComponent implements OnInit {
  constructor(private weatherService: WeatherService){

  }

  weatherData?: WeatherDataTypes

  ngOnInit(): void {
    this.weatherService.getWeatherData('Brasilia')
      .subscribe({
        next: (response) => {
          this.weatherData = response
        }
      })

  }
}
