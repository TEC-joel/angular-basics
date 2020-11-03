import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = 'https://superusers-api-service-2020.azurewebsites.net/weather'
  
  
  constructor() { }
  
  async hentVejret(byNavn = "copenhagen")  {
    let address = this.url + "/" + byNavn
    let response = await fetch(address)
    let json     = await response.json()
    return json
  }
}
