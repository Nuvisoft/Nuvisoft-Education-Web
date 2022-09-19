import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signIn() {
    this.router.navigateByUrl('/home')
  }

  signUp() {
    alert('¡Entidad registrada con éxito!');
    this.signIn();
  }
}
