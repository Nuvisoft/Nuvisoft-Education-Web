import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css'],
})
export class AdministrationComponent implements OnInit {
  menuItems = [
    { tittle: 'Colegio', route: 'school' },
    { tittle: 'Aranceles', route: 'payments' },
    { tittle: 'Asignaturas', route: 'classes' },
    { tittle: 'Membresía Nuvisoft', route: 'membership' },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goTo(item = { tittle: 'empty', route: '/' }) {
    this.router.navigateByUrl(
      `administration/${item.route}`
    );
  }
}
