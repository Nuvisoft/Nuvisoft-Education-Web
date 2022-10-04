import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'comp-job-paper',
  templateUrl: './job-paper.component.html',
  styleUrls: ['./job-paper.component.css'],
})
export class JobPaperComponent implements OnInit {
  questions: string[] = ['Pregunta 1', 'Pregunta 2', 'Pregunta 3'];
  @Input() optionList: string[] = [''];
  @Input() className: string = 'Nombre de la asignatura';
  @Input() studentName: string = '';
  @Output() quetionList = new EventEmitter<string[]>();

  constructor() {}

  ngOnInit(): void {}

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.quetionList.emit(this.questions);
    }
  }
}
