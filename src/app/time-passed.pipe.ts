import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: any): any {
    let today : Date = new Date()// get current date
    let inputDate: any= new Date(today.getFullYear(),today.getMonth(),today.getDate());
    let diffrenceBtw=Math.abs(inputDate-value);
    const secondsInDay=86400;
    let differenceInSeconds=diffrenceBtw*0.001;
    let countTotal=differenceInSeconds/secondsInDay;

    if(countTotal>=0){
      return Math.ceil(countTotal)+" "+"days ago.";
    } else {
      return 0;
    }

  }

}
