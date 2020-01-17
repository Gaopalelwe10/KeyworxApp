import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilterPipe'
})
export class CategoryFilterPipePipe implements PipeTransform {

 
  transform(array: any[], text: string = ''): any[] {
    console.log("text " + text);

    if (text === '' || text === null) {
      return array;
    }

    
    return array.filter(item => {
      return item.location.toLowerCase().includes(text.toLowerCase());
    });
  }
}
