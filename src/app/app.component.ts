import { Component } from '@angular/core';
import { NavItem } from './class/nav-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: NavItem[] = [

    {
      label: 'Inicio',
      link: '',
    },
    {
      label: 'Usuarios',
      link: 'usuarios',
    },
    {
      label: 'Login',
      link: 'login',
    },
    {
      label: 'Carrito',
      link: 'carrito',
    },
    {
      label: 'Error',
      link: 'path_no_existe',
    },

  ];
}
