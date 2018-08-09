import { Component ,ViewChild , AfterViewInit} from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements  AfterViewInit{
  @ViewChild(ChildComponent) child;
 message="hello"
receiveMsg($event){
  this.message=$event

}
  constructor() { }

 
  ngAfterViewInit(){
    this.message=this.child.message;
  }

}
