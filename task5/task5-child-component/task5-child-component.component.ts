import { Component,Output , EventEmitter ,ViewChild , AfterViewInit } from '@angular/core';
import { Task5SubchildComponentComponent } from '../task5-subchild-component/task5-subchild-component.component';
@Component({
  selector: 'app-task5-child-component',
  templateUrl: './task5-child-component.component.html',
  styleUrls: ['./task5-child-component.component.css']
})
export class Task5ChildComponentComponent implements  AfterViewInit{
  @ViewChild(Task5SubchildComponentComponent) subchild;
 message=""
receiveMsg($event){
  this.message=$event

}
@Output() MessageEvent = new EventEmitter<string>()
  sendMsg() {
    this.MessageEvent.emit(this.message);
  }
  constructor() { }

 
  ngAfterViewInit(){
    this.message=this.subchild.message;
  }
}
