import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'comp-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent {
  questionTitle: string = '';
  @Output() answerEmitter = new EventEmitter<string>();
  answer = '';
  @Input() charLength = 500;
  constructor() {}

  handleChange() {
    this.answerEmitter.emit(this.answer);
  }
}
