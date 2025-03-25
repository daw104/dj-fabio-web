import {Component, OnInit} from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {Badge} from 'primeng/badge';
import {Avatar} from 'primeng/avatar';
import {MenuItem} from 'primeng/api';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {Ripple} from 'primeng/ripple';

@Component({
  selector: 'app-navbar',
  imports: [
    Menubar,
    Badge,
    Avatar,
    NgClass,
    NgIf,
    Ripple,
    NgForOf
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
      },
      {
        label: 'Servicios',
        icon: 'pi pi-search',
      },
      {
        label: 'Acerca',
        icon: 'pi pi-search',
      },
      {
        label: 'Contacto',
        icon: 'pi pi-search',
      },
    ];
  }
}
