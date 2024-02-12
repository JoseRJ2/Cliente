import { Component, OnInit } from '@angular/core';
import { UsuarioService} from './../../services/usuario.service';
import { Usuario } from './../../models/usuario';
import { Rol } from './../../models/roles';
import { RolesService } from './../../services/roles.service';
declare var $: any;
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {
  roles : Rol [] = [];
  usuarios : Usuario [] = [];
  usuario :Usuario= new Usuario();
  usuarioE: Usuario= new Usuario();
  usuarioM: Usuario= new Usuario();
  usuarioC: Usuario= new Usuario();
  constructor(private usuarioService : UsuarioService, private rolesService : RolesService){ 
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
    this.usuarioService.listOne(id_usuario).subscribe((resusuario: any) =>
    {
      this.usuarioM = resusuario;  
    }, err => console.error(err));
    this.rolesService.list().subscribe((resrol: any) =>
    {
      this.roles = resrol;  
    }, err => console.error(err));
    $("#modalModificarUsuario").modal("open");
    console.log("Antes de esto esta el error")
  }

  guardarActualizarUsuario()
  {
    console.log("Cerrando");
    this.usuarioService.update(this.usuarioM.id,this.usuarioM).subscribe(() =>
    {
      console.log("usuario actualizado")
      this.usuarios=[]
      this.usuarioService.list().subscribe((resusuario:any) =>
      {
        this.usuarios= resusuario;
      }, err => console.error(err));
    }, err => console.error(err));
    $("#modalModificarUsuario").modal("close");
  }

  eliminarUsuario(usuario:any)
  {
    console.log(usuario)
    this.usuarioE.id=usuario;
    $('#modalEliminarUsuario').modal();
    $("#modalEliminarUsuario").modal("open");
  }

  guardarEliminarUsuario()
  {
    console.log("holi")
    console.log(this.usuarioE.id)
    this.usuarioService.delete(this.usuarioE.id).subscribe(() =>
    {
      console.log("usuario eliminado")
      this.usuarios=[]
      this.usuarioService.list().subscribe((resusuario:any) =>
      {
        this.usuarios= resusuario;
      }, err => console.error(err));
    }, err => console.error(err));
    $("#modalEliminarUsuario").modal("close");
    console.log(this.usuario)
  }

  crearUsuario(){
    this.usuarioC= new Usuario();
    this.usuarioC.usuario="";
    this.usuarioC.contrasena="";
    this.rolesService.list().subscribe((resrol: any) =>
    {
      this.roles = resrol;  
    }, err => console.error(err));
    $('#modalCrearUsuario').modal();
    $("#modalCrearUsuario").modal("open");
  }

  guardarCrearUsuario()
  {
    this.usuarioService.create(this.usuarioC).subscribe(() =>
    {
      this.usuarios=[]
      this.usuarioService.list().subscribe((resusuario:any) =>
      {
        this.usuarios= resusuario;
      }, err => console.error(err));
    }, err => console.error(err));
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
