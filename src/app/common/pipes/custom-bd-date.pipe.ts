import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from "@angular/common";

@Pipe({
    standalone: true,
    name: 'customBdDate'
})
export class CustomBdDatePipe extends DatePipe implements PipeTransform {
  override transform(value: any, args?: any): any {
    return super.transform(value, 'dd \'de\' MMMM \'de\' yyyy', 'pt');
  }
}
