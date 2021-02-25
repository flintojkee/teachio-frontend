import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tio-test-task',
  templateUrl: './test-task.component.html',
  styleUrls: ['./test-task.component.scss'],
})
export class TestTaskComponent implements OnInit {
  @Input() input = 'default-value';
  @Output() output = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
