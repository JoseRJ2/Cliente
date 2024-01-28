import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuarios = new Usuario() ;
  constructor(private usuarioService : UsuarioService , private router: Router){

  }
  logueo()
  {
    this.usuarioService.existe(this.usuarios.usuario,this.usuarios.contrasena).subscribe((resusuario: any) =>
    {
      if(resusuario.idRol != -1)
      {
        //localStorage.setItem('correo',this.usuario.correo);
        this.router.navigate(['inicio/productos']);
        console.log("Usuario valido");
      }else{
        console.log("Error, usuario o contrasena no valida");
      }
    },
    err => console.error(err)
    );
  }
}
