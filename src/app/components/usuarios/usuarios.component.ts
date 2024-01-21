import { Component, OnInit } from '@angular/core';
import { UsuarioService} from './../../services/usuario.service';
import { Usuario } from './../../models/usuario';
declare var $: any;
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {
  usuarios : Usuario [] = [];
  usuario :Usuario= new Usuario();
  constructor(private usuarioService : UsuarioService){
    
  }
  ngOnInit(): void {
    $(document).ready(function()
    {
      $('.modal').modal();

    });
    this.usuarioService.list().subscribe((resusuario: any) =>
    {
      this.usuarios = resusuario;  
      //console.log(resusuario);
      console.log(this.usuarios)
    },
    err => console.error(err)
    );
  }

  actualizarUsuario(id_usuario:any)
  {
    console.log(id_usuario);
    //$('#modalModificarUsuario').modal();
    $("#modalModificarUsuario").modal("open");
    console.log("Antes de esto esta el error")
  }
  guardarActualizarUsuario()
  {
    console.log("Cerrando");
    $("#modalModificarUsuario").modal("close");
    console.log(this.usuario)
  }
  eliminarUsuario(id_usuario:any)
  {
    console.log(id_usuario);
    $('#modalEliminarUsuario').modal();
    $("#modalEliminarUsuario").modal("open");
  }
  guardarEliminarUsuario()
  {
    console.log("Cerrando");
    $("#modalEliminarUsuario").modal("close");
    console.log(this.usuario)
  }
  crearUsuario(){
    $('#modalCrearUsuario').modal();
    $("#modalCrearUsuario").modal("open");
  }
  guardarCrearUsuario()
  {
    console.log("Cerrando");
    $("#modalCrearUsuario").modal("close");
  }
  buscarUsuario(usuario:any){
    this.usuarios=[];
    this.usuarioService.listOne(usuario).subscribe((resusuario: any) =>
    {
      this.usuarios=[resusuario];  
    },
    err => console.error(err)
    );
  }
}
