import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pgch-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  @Input() options: option[] = [
    {
      route: 'classes',
      title: 'Classes',
    },
    {
      route: 'teachers',
      title: 'Teachers',
    },
    {
      route: 'students',
      title: 'Students',
    },
    {
      route: 'statistics',
      title: 'Statistics',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

interface option {
  route: string;
  title: string;
}
