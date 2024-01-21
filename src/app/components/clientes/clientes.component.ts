import { Component,OnInit } from '@angular/core';
import { ClientesService } from './../../services/clientes.service';
import { Cliente } from './../../models/clientes';
declare var $: any;
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {
  clientes : Cliente [] = [];
  cliente :Cliente= new Cliente();
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
    $('#modalActualizarCliente').modal();
    $("#modalActualizarCliente").modal("open");
  }
  guardarActualizarCliente()
  {
    $("#modalActualizarCliente").modal("close");
  }
  eliminarCliente(id_usuario:any)
  {
    $('#modalEliminarCliente').modal();
    $("#modalEliminarCliente").modal("open");
  }
  guardarEliminarCliente()
  {
    $("#modalEliminarCliente").modal("close");
  }
  agregarCliente()
  {
    $('#modalAgregarCliente').modal();
    $("#modalAgregarCliente").modal("open");
  }
  guardarAgregarCliente()
  {
    $("#modalAgregarCliente").modal("close");
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
