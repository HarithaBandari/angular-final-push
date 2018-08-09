import { Component,ViewChild, AfterViewInit } from '@angular/core';
import { Task6Child1ComponentComponent } from '../task6-child1-component/task6-child1-component.component';
@Component({
  selector: 'app-task6-child2-component',
  templateUrl: './task6-child2-component.component.html',
  styleUrls: ['./task6-child2-component.component.css']
})
export class Task6Child2ComponentComponent implements  AfterViewInit{
  @ViewChild(Task6Child1ComponentComponent) child;
 message=""
receiveMsg($event){
  this.message=$event

}
  constructor() { }

 
  ngAfterViewInit(){
    this.message=this.child.message;
  }
}
