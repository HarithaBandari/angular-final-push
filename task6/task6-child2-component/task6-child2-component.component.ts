import { Component, OnInit} from '@angular/core';
import { Task6Child1ComponentComponent } from '../task6-child1-component/task6-child1-component.component';
@Component({
  selector: 'app-task6-child2-component',
  templateUrl: './task6-child2-component.component.html',
  styleUrls: ['./task6-child2-component.component.css']
})

export class Task6Child2ComponentComponent implements OnInit {
  
  output ;
  
  constructor(service:Task6Child1ComponentComponent) {
  this.output=service.usableCode();
   }
  


  ngOnInit() {
 
  }
}
