import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tio-text-task',
  templateUrl: './text-task.component.html',
  styleUrls: ['./text-task.component.scss']
})
export class TextTaskComponent implements OnInit {
  @Input() input = 'default-value';
  @Output() output = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
