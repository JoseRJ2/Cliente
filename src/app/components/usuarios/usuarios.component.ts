import { Component } from '@angular/core';
import { UsuarioService} from './../../services/usuario.service';
import { Usuario } from './../../models/usuario';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  usuarios : Usuario [] = [];

  usuario ! : Usuario;
  constructor(private usuarioService : UsuarioService){
    this.usuarioService.list().subscribe((resusuario: any) =>
    {
      this.usuarios = resusuario;  
      //console.log(resusuario);
      console.log(this.usuarios)
    },
    err => console.error(err)
    );
  }
}
