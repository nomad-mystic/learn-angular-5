import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStatus',
  pure: false
})

export class FilterStatusPipe implements PipeTransform {

  transform(value: any, filter: string, propName: string): any {
    const resultArray: any[] = [];

    if (value.length === 0 || filter === '') {
      return value;
    }

    for (const item of value) {
      if (item[propName] === filter) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
