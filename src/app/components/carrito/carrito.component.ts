import { Component, OnInit } from '@angular/core';
import { CarritoService } from './../../services/carrito.service';
declare var $: any;
import { Carrito } from './../../models/carritos';
import e from 'cors';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit{
  carritos: Carrito[] = [];
  carrito: Carrito = new Carrito();
  carritoNuevo: Carrito = new Carrito();
  constructor(private carritoService: CarritoService) { }
  ngOnInit(): void {
    $(document).ready(function()
    {
      $('.modal').modal();
    });
    this.carritoService.list().subscribe((data: any) => {
      this.carritos = data;
    });
  }
  crearCarrito(): void {
    $('#modalCrearCarrito').modal('open');
  }

  guardarCrearCarrito(): void {
    this.carritoService.create(this.carritoNuevo).subscribe((data: any) => {
      this.carritos = data;
      this.carritoService.list().subscribe((data: any) => {
        this.carritos = data;
      }, error => console.error(error));
    });
    $('#modalCrearCarrito').modal('close');
  }
  buscarCarrito(): void {
    this.carritos=[];
    this.carritoService.listOne(this.carrito.id).subscribe((data: any) => {
      this.carritos.push(data);
    }, error => console.error(error));
  } 
}
