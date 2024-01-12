import { Injectable } from '@angular/core';
import { User } from '../../../shared/types/user';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  WEATHER_API: Readonly<string> = 'https://api.open-meteo.com/v1/forecast'

  async getUserWeather(user: User) {
    const { latitude, longitude } = user.location.coordinates;
    const WEATHER_PARAMS = `?latitude=${latitude}&longitude=${longitude}`
    return await fetch(`${this.WEATHER_API}${WEATHER_PARAMS}&current_weather=true&hourly=temperature_2m,weathercode`).then(res => res.json()).then(data => data);
  }

  async getUserWithWeather(user: User) {
    const weather = await this.getUserWeather(user);
    return { ...user, weather: weather.current_weather };
  }

  async getUsersWithWeather(users: User[]) {
    const promises =  users.map(async user => {
      return await this.getUserWithWeather(user);
    })
    return Promise.all(promises);
  }

}