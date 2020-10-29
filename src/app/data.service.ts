import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  db = "assets/data.json"
  constructor() {}

  
  async getData(){
     let res  = await fetch(this.db)
     let json = await res.json() 
     return json
  }

  async getCalculation_filter(UserName:string) {
    let res  = await fetch(this.db)
    let json = await res.json() 
    let data:Array<any> = Array.from(json)

    return data
          .filter( x => x.name == UserName)
    
  }


  async getCalculation_filter_by_id(id:number) {

      let res  = await fetch(this.db)
      let json = await res.json() 
      let data:Array<any> = Array.from(json)
  
      return data
            .filter( p => p.id  == id )
  }

  async getCalculation() {
    let res  = await fetch(this.db)
    let json = await res.json() 
    let data:Array<any> = Array.from(json)

    return  data
      .filter(person => person.isForceUser)
      .map(x => x.pilotingScore + x.shootingScore )
      .reduce((x, xx) => x + xx,0)
  }


}
