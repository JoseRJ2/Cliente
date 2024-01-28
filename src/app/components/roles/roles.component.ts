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
  roles: Rol [] = [];
  rol: Rol= new Rol();
  rolM :Rol= new Rol();
  rolE :Rol= new Rol();
  rolN :Rol= new Rol();
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
    this.rolM.id=role
    this.roleService.listOne(this.rolM.id).subscribe((resRoles: any) =>
    {
      this.rolM=resRoles
    }, err => console.error(err));
    $("#modalModificarRol").modal("open")
  }
  guardarActualizarRol(){
    $("#modalModificarRol").modal("close")
    this.roleService.update(this.rolM.id,this.rolM).subscribe(() =>
    {
      this.roleService.list().subscribe((resRoles: any) =>
      {
        this.roles = resRoles; 
      }, err => console.error(err));
    }, err => console.error(err));
  }
  eliminarRol(role:any){
    this.rolE.id=role
    $("#modalEliminarRol").modal("open")
  }
  guardarEliminarRol(){
    $("#modalEliminarRol").modal("close")
    this.roleService.delete(this.rolE.id).subscribe(() =>
    {
      this.roleService.list().subscribe((resRoles: any) =>
      {
        this.roles = resRoles; 
      }, err => console.error(err));
    }, err => console.error(err));
  }
  crearRol(){
    $("#modalCrearRol").modal("open")
  }
  guardarCreaRol(){
    $("#modalCrearRol").modal("close")
    this.roleService.create(this.rolN).subscribe(() =>
    {
      this.roleService.list().subscribe((resRoles: any) =>
      {
        this.roles = resRoles; 
      }, err => console.error(err));
    }, err => console.error(err));
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
