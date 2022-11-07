import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp-teachers-panel',
  templateUrl: './teachers-panel.component.html',
  styleUrls: ['./teachers-panel.component.css'],
})
export class TeachersPanelComponent implements OnInit {
  buttonName = 'New Teacher';
  infoText =
    'In this panel you can create some Teachers to add to the college, to start creating just click below!';
  title = 'Teachers';
  img = "../../../../assets/img/Teacher-vectorial.jpg";
  constructor() {}

  ngOnInit(): void {}
}
