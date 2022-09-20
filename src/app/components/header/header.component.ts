import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() title = '¡Bienvenido de nuevo, profe!';

  showMenu = false;

  constructor() {}

  ngOnInit(): void {}

  handleMenu() {
    this.showMenu = !this.showMenu;
  }
}
