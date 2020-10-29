import { Component} from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'navigation',
  template: `
    <h1> Map & Reduce Demo </h1>
    <pre>{{data | json}}</pre>
  `
})
export class NavigationComponent {
  
  data

  constructor(private service : DataService) { 
       this.data = service.getData()
       
    // this.data =  service.getCalculation_filter('User 01')
    // this.data =  service.getCalculation_filter('User 05')
    // this.data =  service.getCalculation_filter_by_id(1)
    // this.data =  service.getCalculation()
  }

   
  
}

