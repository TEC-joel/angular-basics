import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = [
    {
      id: 1,
      name: "User 01" ,
      pilotingScore: 10,
      shootingScore: 20,
      isForceUser: true,
    },
    {
      id: 2,
      name: "User 02",
      pilotingScore: 20,
      shootingScore: 30,
      isForceUser: false,
    },
    {
      id: 3,
      name: "User 03",
      pilotingScore: 5,
      shootingScore: 10,
      isForceUser: false,
    },
    {
      id: 4,
      name: "User 04",
      pilotingScore: 5,
      shootingScore: 5,
      isForceUser: true,
    },
    {
      id: 5,
      name: "User 05",
      pilotingScore: 10,
      shootingScore: 10,
      isForceUser: true,
    },
  ]

  constructor() { }

  getData(){
    return this.data
   
  }

  getCalculation_filter(UserName:string) {
    return this.data
    // like SQL Where 
    // .filter(person => !person.isForceUser)
     .filter( x => x.name == UserName)
    // .filter( p => p.id > 2)
    // .filter( x => x.isForceUser )
    // .filter(person => person.isForceUser)
   
  }


  getCalculation_filter_by_id(id:number) {
      return this.data.filter( p => p.id  == id)
  }

  getCalculation() {
    return  this.data
      // like SQL Where 
      // 2 objects
      //.filter(person => !person.isForceUser)
      
      // 3 objects
      .filter(person => person.isForceUser)

      // .filter( x => x.name == 'User 01')
      // .filter( p => p.id > 2)
      // .filter( x => x.isForceUser )
      
      // like foreach, but return new Array
      // [30,10,20]
        .map(x => x.pilotingScore + x.shootingScore )
      
      // calculations //60
      .reduce((x, xx) => x + xx,0)
  }


}
