import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comp-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input() description = '';
  @Input() img = './../../../favicon.ico';
  @Input() button = '';

  constructor() { }

  ngOnInit(): void {
  }

}
