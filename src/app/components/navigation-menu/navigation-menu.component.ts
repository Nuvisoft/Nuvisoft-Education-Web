import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comp-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  @Input() isShowing: boolean = false;
  @Input() isFitMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
