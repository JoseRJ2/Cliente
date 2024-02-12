import { Component, OnInit } from '@angular/core';
import { CarritoService } from './../../services/carrito.service';
import { ProductosService } from './../../services/productos.service';
declare var $: any;
import { Carrito } from './../../models/carritos';
import { AddProduct } from './../../models/añadirProductos';
import { ListProducto } from './../../models/listProductos';
import { PagarCarrito } from './../../models/pagarCarrito';
import { Producto } from './../../models/productos';
import { Usuario } from './../../models/usuario';
import { UsuarioService } from './../../services/usuario.service';
import { Cliente } from './../../models/clientes';
import { ClientesService } from './../../services/clientes.service';
import e from 'cors';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit{
  clientes: Cliente[] = [];
  usuarios: Usuario[] = [];
  carritos: Carrito[] = [];
  productos: Producto[] = [];
  carrito: Carrito = new Carrito();
  carritoNuevo: Carrito = new Carrito();
  addProduct: AddProduct = new AddProduct();
  listProductos: ListProducto[] = [];
  carritoCancelar: Carrito = new Carrito();
  pagarC: PagarCarrito = new PagarCarrito();
  constructor(private carritoService: CarritoService,private productosService : ProductosService, private clientesService : ClientesService, private usuarioService: UsuarioService) { }
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
    this.clientesService.list().subscribe((data: any) => {
      this.clientes = data;
    }, error => console.error(error));
    this.usuarioService.list().subscribe((data: any) => {
      this.usuarios = data;
    }, error => console.error(error));
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
  anadirProductosCarrito(carrito: any){
    this.addProduct.idCarrito = carrito;
    this.productosService.list().subscribe((data: any) => {
      this.productos = data;
    }, error => console.error(error));
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
  pagarCarrito(carrito: any){
    this.pagarC.idCarrito = carrito;
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
