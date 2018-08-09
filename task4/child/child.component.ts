import { Component, OnInit , Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  message: string = "hello everybody welcome to the party"
  @Output() MessageEvent = new EventEmitter<string>()
  sendMsg() {
    this.MessageEvent.emit(this.message);
  }
  constructor() { }

  ngOnInit() {
  }

}
