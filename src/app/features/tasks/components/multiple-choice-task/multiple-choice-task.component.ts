import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tio-multiple-choice-task',
  templateUrl: './multiple-choice-task.component.html',
  styleUrls: ['./multiple-choice-task.component.scss']
})
export class MultipleChoiceTaskComponent implements OnInit {
  @Input() input = 'default-value';
  @Output() output = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
