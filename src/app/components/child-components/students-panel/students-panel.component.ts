import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp-students-panel',
  templateUrl: './students-panel.component.html',
  styleUrls: ['./students-panel.component.css'],
})
export class StudentsPanelComponent implements OnInit {
  infoText = 'In this panel you can create some Students to add to the college, to start creating just click below!';
  img = '../../../../assets/img/Student-vectorial.jpg';
  buttonName = 'New Student';
  constructor() {}

  ngOnInit(): void {}
}
