import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../servises/data.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { Comp2Component } from '../comp2/comp2.component';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private servise:DataService, private route:Router) { }

  ngOnInit() {

    this.servise.log()
  }
  cli()
  {
    this.route.navigate(['/lazy/com2']);
    this.servise.counter++;
   
  }

}
