import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-task5-subchild-component',
  templateUrl: './task5-subchild-component.component.html',
  styleUrls: ['./task5-subchild-component.component.css']
})
export class Task5SubchildComponentComponent implements OnInit {
  message: string = "hello everybody welcome to the party"
  @Output() MessageEvent = new EventEmitter<string>()
  sendMsg() {
    this.MessageEvent.emit(this.message);
  }
  constructor() { }

  ngOnInit() {
  }

}
