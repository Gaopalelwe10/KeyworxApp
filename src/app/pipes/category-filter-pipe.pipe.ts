import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilterPipe'
})
export class CategoryFilterPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
