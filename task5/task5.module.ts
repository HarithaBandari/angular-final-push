import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task5ParentComponentComponent } from './task5-parent-component/task5-parent-component.component';
import { Task5ChildComponentComponent } from './task5-child-component/task5-child-component.component';
import { Task5SubchildComponentComponent } from './task5-subchild-component/task5-subchild-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Task5ParentComponentComponent, Task5ChildComponentComponent, Task5SubchildComponentComponent],
  exports :  [Task5ParentComponentComponent, Task5ChildComponentComponent, Task5SubchildComponentComponent]
 
})
export class Task5Module { }
