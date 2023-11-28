import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from './services/weather.service'; // Ajusta la ruta relativa según la estructura de tu proyecto



@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  cities: string[] = ['Melipilla', 'Talagante','Maipo','Santiago','Curacaví','María Pinto','Bollenar']; // Lista de ciudades
  weatherData: any[] = []; // Lista de datos del clima para cada ciudad
  currentDate: string;
  currentDay: string;
  currentTime: string;


  constructor(private weatherService: WeatherService) {
    const today = new Date();
    this.currentDate = today.toISOString().slice(0, 10); // Obtiene la fecha en formato YYYY-MM-DD
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const today2 = new Date();
    this.currentDay = days[today2.getDay()];
    const today3 = new Date();
    const hours = today3.getHours();
    const minutes = today3.getMinutes();
    this.currentTime = this.formatTime(hours, minutes);

  }
  formatTime(hours: number, minutes: number): string {
    const hourStr = hours < 10 ? '0' + hours : hours.toString();
    const minuteStr = minutes < 10 ? '0' + minutes : minutes.toString();
    return `${hourStr}:${minuteStr}`;
  }

  ngOnInit() {
    this.getCitiesWeatherData();
    
  }

  
  getCitiesWeatherData() {
    this.cities.forEach((city) => {
      this.weatherService.getWeatherData(city).subscribe((data) => {
        this.weatherData.push(data);
      });
    });
  }
  getWeatherIconUrl(iconCode: string): string {
    return `https://openweathermap.org/img/w/${iconCode}.png`;
  }
  

}
