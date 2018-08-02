import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';
import { DataService } from '../../../servises/data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private route:Router,private servise:DataService) { }

  ngOnInit() {
    this.servise.log();
  }
  cli()
  {
    this.route.navigate(['/lazy/com1']);
    this.servise.counter++;
    
  }
}
