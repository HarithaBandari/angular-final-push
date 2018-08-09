import { Component,ViewChild , AfterViewInit } from '@angular/core';
import { Task5ChildComponentComponent } from '../task5-child-component/task5-child-component.component';
@Component({
  selector: 'app-task5-parent-component',
  templateUrl: './task5-parent-component.component.html',
  styleUrls: ['./task5-parent-component.component.css']
})
export class Task5ParentComponentComponent implements  AfterViewInit{
  @ViewChild(Task5ChildComponentComponent) child;
 message=""
receiveMsg($event){
  this.message=$event

}
  constructor() { }

 
  ngAfterViewInit(){
    this.message=this.child.message;
  }

}
