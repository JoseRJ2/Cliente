import { Component,OnInit } from '@angular/core';
import { ClientesService } from './../../services/clientes.service';
import { Cliente } from './../../models/clientes';
import e from 'cors';
declare var $: any;
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {
  clientes : Cliente [] = [];
  cliente :Cliente= new Cliente();
  clienteM :Cliente= new Cliente();
  clienteE :Cliente= new Cliente();
  clienteA :Cliente= new Cliente();
  constructor(private clienteService : ClientesService){
  }

  ngOnInit(): void {
    $(document).ready(function()
    {
      $('.modal').modal();
    });
    this.clienteService.list().subscribe((rescliente: any) =>
    {
      this.clientes = rescliente; 
    },
    err => console.error(err)
    );
  }
  actualizarCliente(id_usuario:any)
  {
    this.clienteService.listOne(id_usuario).subscribe((resusuario: any) =>
    {
      this.clienteM=resusuario;  
    }, err => console.error(err));
    $("#modalActualizarCliente").modal("open");
  }
  guardarActualizarCliente()
  {
    $("#modalActualizarCliente").modal("close");
    this.clienteService.update(this.clienteM.id,this.clienteM).subscribe(() =>
    {
      this.clienteService.list().subscribe((rescliente: any) =>
      {
        this.clientes = rescliente; 
      }, err => console.error(err));
    }, err => console.error(err));
  }
  eliminarCliente(id_usuario:any)
  {
    this.clienteE.id=id_usuario;
    $("#modalEliminarCliente").modal("open");
  }
  guardarEliminarCliente()
  {
    $("#modalEliminarCliente").modal("close");
    this.clienteService.delete(this.clienteE.id).subscribe(() =>
    {
      this.clienteService.list().subscribe((rescliente: any) =>
      {
        this.clientes = rescliente; 
      }, err => console.error(err));
    }, err => console.error(err));
  }
  agregarCliente()
  {
    $("#modalAgregarCliente").modal("open");
  }
  guardarAgregarCliente()
  {
    $("#modalAgregarCliente").modal("close");
    this.clienteService.create(this.clienteA).subscribe(() =>
    {
      this.clienteService.list().subscribe((rescliente: any) =>
      {
        this.clientes = rescliente; 
      }, err => console.error(err));
    }, err => console.error(err));
  }
  buscarCliente(cliente:any){
    this.clientes=[];
    this.clienteService.listOne(cliente).subscribe((resusuario: any) =>
    {
      this.clientes=[resusuario];  
    },
    err => console.error(err)
    );
  }
}
