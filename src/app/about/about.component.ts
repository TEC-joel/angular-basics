import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  template: `
    <p>
      about works!
    </p>

    <p> {{ "test" | dato  }}   </p>

  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
