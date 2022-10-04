import {
  CdkDragDrop,
  moveItemInArray,
  copyArrayItem,
  CdkDragExit,
} from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'page-jobs-creator',
  templateUrl: './jobs-creator.component.html',
  styleUrls: ['./jobs-creator.component.css'],
})
export class JobsCreatorComponent {
  optionsList: string[] = [
    'Pregunta simple',
    'Selección Múltiple',
    'Casillas de selección',
    'Pregunta abierta',
  ];

  questionsList: string[] = [];

  elementWasDraggedOut = false;

  constructor() {}

  onDrop(event: CdkDragDrop<string[]>, isEmptyPosible: boolean = true) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.elementWasDraggedOut = false;
    }
  }

  onDraggedExit(event: CdkDragExit<string[]>, value = true) {
    this.elementWasDraggedOut = value;
    console.log(this.elementWasDraggedOut);
  }
}
