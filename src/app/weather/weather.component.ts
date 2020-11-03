import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  template: `
      <pre>{{data |json}}</pre>

      <h1> {{data?.LocationName}} </h1>
      <h2> {{data?.CurrentData?.temperature}} 
            <span *ngIf="data?.CurrentData"> grader </span> 
      </h2>
      <h3 *ngIf="data?.CurrentData"> it Works </h3> 
  `,
  styles: [
  ]
})
export class WeatherComponent implements OnInit {

  data
  constructor(private service:WeatherService) { }

  async ngOnInit(): Promise<void> {
        this.data = await this.service.hentVejret()
  }

}
