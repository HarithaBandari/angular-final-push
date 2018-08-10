import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task6-child1-component',
  templateUrl: './task6-child1-component.component.html',
  styleUrls: ['./task6-child1-component.component.css']
})

export class Task6Child1ComponentComponent implements OnInit {
  message: string = "hello everybody welcome to the party"
 
  value:string;
  constructor() { }

usableCode()
{
this.value=this.message+"we are done"
return this.value;
}
  ngOnInit() {
  }

}
