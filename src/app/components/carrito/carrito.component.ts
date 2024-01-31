import { Component, OnInit } from '@angular/core';
import { CarritoService } from './../../services/carrito.service';
declare var $: any;
import { Carrito } from './../../models/carritos';
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
    });
    $('#modalCrearCarrito').modal('close');
  }
}
