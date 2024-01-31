import { Component, OnInit } from '@angular/core';
import { CarritoService } from './../../services/carrito.service';
declare var $: any;
import { Carrito } from './../../models/carritos';
import { AddProduct } from './../../models/añadirProductos';
import { ListProducto } from './../../models/listProductos';
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
    this.carritoService.agregar(this.addProduct.idCarrito,this.addProduct.idProducto,this.addProduct.cantidad).subscribe(() => {
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
}
