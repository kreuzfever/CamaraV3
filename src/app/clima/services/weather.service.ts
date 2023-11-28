import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = 'b329c5468fd88cd0cab1ad1cc71fcb9f'; // Reemplaza con tu clave de API de OpenWeatherMap
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeatherData(city: string) {
    const params = {
      q: city,
      appid: this.apiKey,
      units: 'metric', // Puedes cambiar la unidad de temperatura según tu preferencia
    };
    return this.http.get(this.apiUrl, { params });
  }
}
