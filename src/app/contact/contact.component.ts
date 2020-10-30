import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h1>
      {{title | uppercase}}
    </h1>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  title = "contact"
  constructor() { }

  ngOnInit(): void {
  }

}
