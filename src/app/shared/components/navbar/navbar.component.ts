import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menuInfo: any;
  linksGeneral: Array<any> = [];
  linksAuth: Array<any> = [];
  stateNav: any = true;
  linksGeneralAdmin: Array<any> = [];
  linksAuthAdmin: Array<any> = [];

  constructor(private router: Router, private cookieService: CookieService) {}

  ngOnInit(): void {
    this.linksAuth = [
      {
        name: 'Iniciar Sesión',
        router: ['auth/login'],
      },
      {
        name: 'Registrarse',
        router: ['/', 'register'],
      },
    ];

    this.linksGeneral = [
      {
        name: 'Inicio',
        router: ['/'],
      },
    ];

    this.linksGeneralAdmin = [
      {
        name: 'Inicio',
        router: ['/', 'major-admin'],
      },
      {
        name: 'Usuarios',
        router: ['/major-admin/admin-users'],
      },
      {
        name: 'Publicaciones',
        router: ['/major-admin/admin-publications'],
      }
    ];

    this.linksAuthAdmin = [
      {
        name: 'Cerrar Sesión',
        router: ['auth/logout'],
      },
    ];

    const rol = this.cookieService.get('rol');
    if (rol === '2' || rol === 'Admin') {
      this.stateNav = false;
    } else if (rol === '1' || rol === 'User') {
      this.stateNav = false;
    } else {
      this.stateNav = true;
    }
  }

  menu() {
    this.menuInfo = document.getElementById('menu');
    if (this.menuInfo.classList.contains('hidden')) {
      this.menuInfo.classList.remove('hidden');
    } else {
      this.menuInfo.classList.add('hidden');
    }
  }

  logout() {
    console.log("Estoy en logout");
    this.cookieService.delete('token');
    this.cookieService.delete('rol');
    const tokenv = this.cookieService.check('token');
    const rolv = this.cookieService.check('rol');
    console.log(tokenv, rolv);
    if (!tokenv && !rolv) {
      this.router.navigate(['/']);
    } else {
      this.cookieService.delete('token');
      this.cookieService.delete('rol');
    }
  }
}
