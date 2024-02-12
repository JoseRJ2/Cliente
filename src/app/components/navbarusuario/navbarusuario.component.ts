import { Component } from '@angular/core';

@Component({
  selector: 'app-navbarusuario',
  templateUrl: './navbarusuario.component.html',
  styleUrl: './navbarusuario.component.css'
})
export class NavbarusuarioComponent {
  Rol: number = 0;
  constructor() {
    const storedRol = localStorage.getItem('Rol');
    
    if (storedRol !== null && !isNaN(parseInt(storedRol))) {
      this.Rol = parseInt(storedRol);
      console.log(this.Rol);
    }
  }
}
