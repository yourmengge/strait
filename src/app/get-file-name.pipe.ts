import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFileName'
})
export class GetFileNamePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value) {
      return value.split('/')[2];
    }
  }

}
