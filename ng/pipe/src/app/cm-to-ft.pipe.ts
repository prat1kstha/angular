import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cmToFt'
})
export class CmToFtPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value * 0.0328084;
  }

}
