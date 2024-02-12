import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbarusuario',
  templateUrl: './navbarusuario.component.html',
  styleUrl: './navbarusuario.component.css'
})
export class NavbarusuarioComponent {
  Rol: number = 0;
  constructor(private router: Router) {
    const storedRol = localStorage.getItem('Rol');
    
    if (storedRol !== null && !isNaN(parseInt(storedRol))) {
      this.Rol = parseInt(storedRol);
      console.log(this.Rol);
    }
  }
  logout() {
    localStorage.removeItem('Rol');
    this.Rol = 0;
    this.router.navigate(['']);
  }
}
