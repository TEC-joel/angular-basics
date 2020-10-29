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
    this.getMyData()
  }
  
  async getMyData(){
      this.data = await this.service.getData()
    
    // this.data = await this.service.getCalculation_filter('User 01')
    // this.data = await this.service.getCalculation_filter('User 02')
    
    // this.data =  await this.service.getCalculation_filter_by_id(1) 
    // this.data =  await this.service.getCalculation_filter_by_id(2)
    
    // this.data = await this.service.getCalculation()
    
  }

   
  
}

