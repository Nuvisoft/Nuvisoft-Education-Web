import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp-classes-panel',
  templateUrl: './classes-panel.component.html',
  styleUrls: ['./classes-panel.component.css'],
})
export class ClassesPanelComponent implements OnInit {
  buttonName = 'Create button';
  infoText =
    'In this panel you can create some classes to add to the college, to start creating just click below!';
  title = 'Elements Title';
  img = '../../../../assets/img/vectorial-image-study.jpg';
  constructor() {}

  ngOnInit(): void {}
}
