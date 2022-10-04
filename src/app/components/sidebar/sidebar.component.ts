import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comp-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() type = '';
  isDeployed = true;
  @Input() categories = [
    {
      title: "Preguntas",
      img: "../../../favicon.ico",
      content: []
    },    {
      title: "Rompecabezas",
      img: "../../../favicon.ico",
      content: []
    },    {
      title: "Booleanas",
      img: "../../../favicon.ico",
      content: []
    },    {
      title: "Ilustraciones",
      img: "../../../favicon.ico",
      content: []
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
