import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'orderStatus',
  pure: false,
})

export class OrderStatusPipe implements PipeTransform {

  transform (value: object[], propName: string): object[] {
    const transformedStatusArray: object[] = value;

    // sort by name
    transformedStatusArray.sort((a, b) => {
      // console.log(a.name);
      // console.log(b);
      const nameA = a[propName].toUpperCase(); // ignore upper and lowercase
      const nameB = b[propName].toUpperCase(); // ignore upper and lowercase

      console.log(nameA);

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

    return transformedStatusArray;
  }

}
