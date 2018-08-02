import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
counter:number = 0;
  constructor() {}   
   add()
   {
     this.counter++;
   }
   log()
   {
    console.log(this.counter);
   }
}
