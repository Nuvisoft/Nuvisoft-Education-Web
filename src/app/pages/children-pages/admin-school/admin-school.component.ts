import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pgch-admin-school',
  templateUrl: './admin-school.component.html',
  styleUrls: ['./admin-school.component.css'],
})
export class AdminSchoolComponent implements OnInit {
  @Input() buttonName = 'Create button';
  @Input() infoText =
  'In this panel you can create some classes to add to the college, to start creating just click below!';
  @Input() title = 'Elements Title';
  img = "../../../../assets/img/vectorial-image-study.jpg";
    constructor() {}

  ngOnInit(): void {}
}
