import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dato'
})
export class DatoPipe implements PipeTransform {

  /*
      <p> {{data.start1 | dato}}   </p>

      <p> {{ "test" | dato}}   </p>
      <p>    </p>

  */
  transform(value: string, ...args: string[]): string {
     return  `this value is equal ${value.toUpperCase()}  ` ;
  }

}
