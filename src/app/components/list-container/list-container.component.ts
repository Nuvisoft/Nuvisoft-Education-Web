import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comp-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css'],
})
export class ListContainerComponent implements OnInit {
  @Input() title = 'Title';
  @Input() elements: Element[] = [
    {
      name: 'Brandon Fonseca',
      description: 'none',
      img: './../../../favicon.ico',
      badge: 'none',
    },
    {
      name: 'Brandon Fonseca',
      description: 'none',
      img: './../../../favicon.ico',
      badge: 'none',
    },
    {
      name: 'Brandon Fonseca',
      description: 'none',
      img: './../../../favicon.ico',
      badge: 'none',
    },    {
      name: 'Brandon Fonseca',
      description: 'none',
      img: './../../../favicon.ico',
      badge: 'none',
    },    {
      name: 'Brandon Fonseca',
      description: 'none',
      img: './../../../favicon.ico',
      badge: 'none',
    },    {
      name: 'Brandon Fonseca',
      description: 'none',
      img: './../../../favicon.ico',
      badge: 'none',
    },    {
      name: 'Brandon Fonseca',
      description: 'none',
      img: './../../../favicon.ico',
      badge: 'none',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

interface Element {
  name: string;
  description: string | 'none';
  img: string;
  badge: badge;
}

type badge = number | 'check' | 'x' | 'none';
