import { Component, OnInit } from '@angular/core';
import { CarritoService } from './../../services/carrito.service';
declare var $: any;
import { Carrito } from './../../models/carritos';
import { AddProduct } from './../../models/añadirProductos';
import { ListProducto } from './../../models/listProductos';
import { PagarCarrito } from './../../models/pagarCarrito';
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
  addProduct: AddProduct = new AddProduct();
  listProductos: ListProducto[] = [];
  carritoCancelar: Carrito = new Carrito();
  pagarC: PagarCarrito = new PagarCarrito();
  constructor(private carritoService: CarritoService) { }
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
  crearCarrito(){
    $('#modalCrearCarrito').modal('open');
  }

  guardarCrearCarrito(){
    this.carritoService.create(this.carritoNuevo).subscribe((data: any) => {
      this.carritos = data;
      this.carritoService.list().subscribe((data: any) => {
        this.carritos = data;
      }, error => console.error(error));
    });
    $('#modalCrearCarrito').modal('close');
  }
  buscarCarrito(){
    this.carritos=[];
    this.carritoService.listOne(this.carrito.id).subscribe((data: any) => {
      this.carritos.push(data);
    }, error => console.error(error));
  } 
  anadirProductosCarrito(){
    $('#modalAñadirProductos').modal('open');
  }
  guardarAnadirProductos(){
    this.carritoService.agregar(this.addProduct).subscribe(() => {
      this.carritoService.list().subscribe((data: any) => {
        this.carritos = data;
      }, error => console.error(error));
    }, error => console.error(error));
    $('#modalAñadirProducto').modal('close');
  }
  listarProductos(){
    this.carritoService.listcarrito(this.carrito.id).subscribe((data: any) => {
      this.carritos =[]
      this.listProductos = data;
    }, error => console.error(error));
    $('#modalListarProductos').modal('open');
  }
  guardarListarProductos(){
    $('#modalListarProductos').modal('close');
  }
  cancelarCarrito(car:any){
    this.carritoCancelar.id = car
    $('#modalCancelarCarrito').modal('open');
  }
  guardarCancelarCarrito(){
    this.carritoService.cancelarcarrito(this.carritoCancelar.id).subscribe(() => {
      this.carritoService.list().subscribe((data: any) => {
        this.carritos = data;
      }, error => console.error(error));
    }, error => console.error(error));
    $('#modalCancelarCarrito').modal('close');
  }
  pagarCarrito(){
    $('#modalPagarCarrito').modal('open');
  } 
  guardarPagarCarrito(){
    this.carritoService.pagarcarrito(this.pagarC.idCarrito,this.pagarC.descuento,this.pagarC.fecha).subscribe(() => {
      this.carritoService.list().subscribe((data: any) => {
        this.carritos = data;
      }, error => console.error(error));
    }, error => console.error(error));
    $('#modalPagarCarrito').modal('close');
  }
}
