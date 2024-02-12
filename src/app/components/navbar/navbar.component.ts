import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  Rol: number = 0;
  constructor() {
    const storedRol = localStorage.getItem('Rol');
    
    if (storedRol !== null && !isNaN(parseInt(storedRol))) {
      this.Rol = parseInt(storedRol);
      console.log(this.Rol);
    }
  }
}
