import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  certified =
    'https://drive.google.com/file/d/1oKoWvPNs_9aoNU-p0sPLYW1UhQ9bTYmw/view?usp=sharing';

  constructor() {}

  ngOnInit(): void {}

}
