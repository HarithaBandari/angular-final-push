import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import {  ChildComponent } from './child/child.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ParentComponentComponent , ChildComponent],
  exports : [ParentComponentComponent , ChildComponent]
})
export class Task4Module { }
