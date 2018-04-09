import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString',
})

export class ReverseStringPipe implements PipeTransform {

  transform (value: string): string {
    let splitString;
    let reverseString;
    let joinedString;

    splitString = value.split('');
    reverseString = splitString.reverse();
    joinedString = reverseString.join('');

    return joinedString;
  }

}
