import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})

export class ShortenPipe implements PipeTransform {

  transform (value: any, limit: number, anotherArg = 0): any {
    const newValue = value.substr(anotherArg, limit);

    if (value.length > limit) {
      return newValue + ' ...';
    }

    return value;
  }

}
