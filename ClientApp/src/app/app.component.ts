import { Component } from '@angular/core';
import { DataService } from './servises/data.service';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private service:DataService, private rout:Router)
  {
    service.add();
    service.log();
  }
  go()
  {    
    this.rout.navigate(['/lazy']);
  }
  go2()
  {    
    this.rout.navigate(['/']);
  }
}
