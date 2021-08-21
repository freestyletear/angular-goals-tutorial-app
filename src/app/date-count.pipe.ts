import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value: any): number {
    let today:Date = new Date(); /* Get current date and time */
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
      var dateDifference = Math.abs(value - todayWithNoTime) /* Return value in miliseconds */
      const secondsInDay = 86400 /* 60 seconds * 60 min in an hr * 24hrs in a day */
      var dateDifferenceSeconds = dateDifference*0.001; /* Convert miliseconds to seconds */
      var dateCounter = dateDifferenceSeconds/secondsInDay;

      if (dateCounter >= 1 && value > todayWithNoTime)
      {
        return dateCounter;
      }else{
        return 0;
      }
  }

}
