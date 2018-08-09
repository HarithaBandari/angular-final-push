import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task6ParentComponentComponent } from './task6-parent-component/task6-parent-component.component';
import { Task6Child1ComponentComponent } from './task6-child1-component/task6-child1-component.component';
import { Task6Child2ComponentComponent } from './task6-child2-component/task6-child2-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Task6ParentComponentComponent, Task6Child1ComponentComponent, Task6Child2ComponentComponent],
  exports : [Task6ParentComponentComponent, Task6Child1ComponentComponent, Task6Child2ComponentComponent]
})
export class Task6Module { }
