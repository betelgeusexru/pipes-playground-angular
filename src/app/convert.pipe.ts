import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: any, targetUnits: string): unknown {
    if (!value) {
      return '';
    }

    switch (targetUnits) {
      case 'km':
        return value * 1.6;
      case 'm':
        return value * 1.6 * 1000;
      case 'cm': {
        return value * 1.6 * 1000 * 1000;
      }
      default:
        return value;
    }
  }
}
