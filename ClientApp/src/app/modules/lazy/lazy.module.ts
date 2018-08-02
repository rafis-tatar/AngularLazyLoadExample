import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    Comp1Component, 
    Comp2Component
  ],
  imports: [
      CommonModule,
      RouterModule.forChild([      
        { path: '', component: Comp1Component } ,
        { path: 'com1', component: Comp1Component } ,
        { path: 'com2', component: Comp2Component }      
      ]),      
  ],
  providers:[]
    
})
export class LazyModule { }
