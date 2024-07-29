import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  public menuItems = signal<MenuItem[]>([
    { title: 'Contador', route: 'counter' },
    { title: 'Usuario', route: 'user-info' },
    { title: 'Mutacione', route: 'properties' },
  ]);
  // public menuItem: MenuItem[] = [
  //   { title: 'Contador', route: 'counter' },
  //   { title: 'User info', route: 'user-info' },
  //   { title: 'Properties', route: 'properties' },
  // ];
}
