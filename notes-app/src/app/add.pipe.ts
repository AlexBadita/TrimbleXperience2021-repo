import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'add'
})
export class AddPipe implements PipeTransform {

  transform(value: number, addValue?: number): number {
    return isNaN(addValue) ? value : value + addValue;
  }

}
