import { Component,OnInit } from '@angular/core';
import { RolesService } from '../../services/roles.service';
import {Rol} from '../../models/roles';
declare var $: any;
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{
  roles:Rol [] = [];
  rol:Rol= new Rol();
  constructor(private roleService:RolesService){
  }
  ngOnInit(): void {
    $(document).ready(function()
    {
      $('.modal').modal();

    });
    this.roleService.list().subscribe((resRoles: any) =>
    {
      this.roles = resRoles; 
    },
    err => console.error(err)
    );
  }
  actualizarRol(role:any){
    $("#modalModificarRol").modal()
    $("#modalModificarRol").modal("open")
  }
  guardarActualizarRol(){
    $("#modalModificarRol").modal("close")
  }
  eliminarRol(role:any){
    $("#modalEliminarRol").modal()
    $("#modalEliminarRol").modal("open")
  }
  guardarEliminarRol(){
    $("#modalEliminarRol").modal("close")
  }
  crearRol(){
    $("#modalCrearRol").modal()
    $("#modalCrearRol").modal("open")
  }
  guardarCreaRol(){
    $("#modalCrearRol").modal("close")
  }
  buscarRol(rol:any){
    this.roles=[]
    this.roleService.listOne(rol).subscribe((resRoles: any) =>
    {
      this.roles=[resRoles]
    }, err => console.error(err)
    );
  }
}
