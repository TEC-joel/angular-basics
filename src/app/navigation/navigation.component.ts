import { Component} from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'navigation',
  templateUrl:'./navigation.component.html'
})
export class NavigationComponent {
  
  selected = false
  data

  constructor(private service : DataService) {
    this.getMyData()
  }
  
  async getMyData(){
     // this.data = await this.service.getData()
    
    // this.data = await this.service.getCalculation_filter('User 01')
    // this.data = await this.service.getCalculation_filter('User 02')
    
    // this.data =  await this.service.getCalculation_filter_by_id(1) 
    // this.data =  await this.service.getCalculation_filter_by_id(2)
    
     this.data = await this.service.getCalculation()
    
  }
   
  
}

