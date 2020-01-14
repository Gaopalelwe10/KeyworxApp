import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'propertyFilterPipe'
})
export class PropertyFilterPipePipe implements PipeTransform {
  transform(array: any[], text: string = ''): any[] {
    console.log(array);
    if (text === '') {
      return null;
    }

    return array.filter(item => {
      return item.category.toLowerCase().includes(text.toLowerCase());
    });
  }

}
