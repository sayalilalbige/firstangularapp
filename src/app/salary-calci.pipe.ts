import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryCalci'
})
export class SalaryCalciPipe implements PipeTransform {

  transform(salary: any, month: any): any {
    return salary*month;
  }

}
