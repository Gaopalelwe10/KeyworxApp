import { Pipe, PipeTransform } from '@angular/core';
import { sortBy } from 'lodash';
import * as _ from "lodash";
@Pipe({
  name: 'propertyFilterPipe'
})
export class PropertyFilterPipePipe implements PipeTransform {
  // transform(array: any[], text: string = ''): any[] {
  //   console.log(array);
  //   if (text === '') {
  //     return null;
  //   }

  //   return array.filter(item => {
  //     return item.category.toLowerCase().includes(text.toLowerCase());
  //   });
    
  // }

  // transform(value: any[], criteria: SortCriteria): any[] {
  //   console.log('Piped');
  //   console.log(value);
  //   if (!value || !criteria)
  //     return value;
    
  //   let p: string = criteria.property;

  //   let sortFn:(a: any, b: any) => any = (a, b) => {
  //     let value: number = 0;
  //     if (a[p] === undefined) value = -1;
  //     else if (b[p] === undefined) value = 1;
  //     else value = a[p] > b[p] ? 1 : (b[p] > a[p] ? -1 : 0);
  //     return criteria.descending ? (value * -1) : value;
  //   };

  //   value.sort(sortFn);
  //   return value;
  // }
  transform(value: any[], order = '', column: string = ''): any[] {
    if (!value || order === '' || !order) { return value; } // no array
    if (!column || column === '') { return sortBy(value); } // sort 1d array
    if (value.length <= 1) { return value; } // array with only one item
    return _.orderBy(value, [column], [order]);
  }
}

export interface SortCriteria {
  property: string;
  descending?: boolean;
}
