import { Component } from '@angular/core';
import { WeatherDataTypes } from '../models/weather.model';
import { WeatherService } from '../services/weather-service.service';

@Component({
  selector: 'app-lower-data',
  templateUrl: './lower-data.component.html',
  styleUrls: ['./lower-data.component.css']
})
export class LowerDataComponent {
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
