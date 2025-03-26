import {Component, OnInit} from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {NgForOf} from '@angular/common';
import {Ripple} from 'primeng/ripple';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    Menubar,
    Ripple,
    NgForOf,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Servicios',
        icon: 'pi pi-search',
        routerLink: '/services',
      },
      {
        label: 'Acerca',
        icon: 'pi pi-search',
        routerLink: '/about',
      },
      {
        label: 'Contacto',
        icon: 'pi pi-search',
        routerLink: '/contact',
      },
    ];
  }
}
