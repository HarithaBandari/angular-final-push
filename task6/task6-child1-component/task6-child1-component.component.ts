import { Component, OnInit , Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task6-child1-component',
  templateUrl: './task6-child1-component.component.html',
  styleUrls: ['./task6-child1-component.component.css']
})
export class Task6Child1ComponentComponent implements OnInit {
  message: string = "hello everybody welcome to the party"
  @Output() MessageEvent = new EventEmitter<string>()
  sendMsg() {
    this.MessageEvent.emit(this.message);
  }
  constructor() { }

  ngOnInit() {
  }

}
