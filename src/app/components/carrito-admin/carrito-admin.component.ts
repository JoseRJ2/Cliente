import { Component, OnInit } from '@angular/core';
import { Carrito } from './../../models/carritos';
import { CarritoService } from './../../services/carrito.service';
declare var $: any;
@Component({
  selector: 'app-carrito-admin',
  templateUrl: './carrito-admin.component.html',
  styleUrl: './carrito-admin.component.css'
})
export class CarritoAdminComponent implements OnInit{
  carritos: Carrito[] = [];
  carrito : Carrito = new Carrito();
  constructor( private carritoService : CarritoService) { }
  ngOnInit(): void {
    $(document).ready(function()
    {
      $('.modal').modal();
    });
    this.carritoService.list().subscribe((data: any) => {
      this.carritos = data;
      console.log(this.carritos)
    });
  }
  eliminarCarrito(id: number){
    this.carrito.id = id;
    $("#modalEliminarCarrito").modal("open");
  }
  guardarEliminarCarrito(){
    $("#modalEliminarCarrito").modal("close");
    this.carritoService.eliminar(this.carrito.id).subscribe(() => {
      this.carritoService.list().subscribe((data: any) => {
        this.carritos = data;
      });
    });
  }
}
