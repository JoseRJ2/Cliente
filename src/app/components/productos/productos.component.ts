import { Component,OnInit } from '@angular/core';
import { ProductosService } from './../../services/productos.service';
import { Producto } from './../../models/productos';
declare var $: any;
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  productos : Producto [] = [];
  producto :Producto= new Producto();
  constructor(private productoService : ProductosService){
    
  }
  ngOnInit(): void {
    $(document).ready(function()
    {
      $('.modal').modal();

    });

    this.productoService.list().subscribe((resproducto: any) =>
    {
      this.productos = resproducto;  
      //console.log(resproducto);
      console.log(this.productos)
    },
    err => console.error(err)
    );
  }
  
  actualizarProducto(id_usuario:any)
  {
    console.log(id_usuario);
    //$('#modalModificarUsuario').modal();
    $("#modalModificarProducto").modal("open");
  }
  guardarActualizarProducto()
  {
    $("#modalModificarProducto").modal("close");
  }
  eliminarProducto(producto:any){
    this.producto=producto;
    $('#modalEliminarProducto').modal();
    $("#modalEliminarProducto").modal("open");
  }
  guardarEliminarProducto(producto:any){
    $("#modalEliminarProducto").modal("close");
    const producto2=this.producto
    this.productoService.delete(producto2).subscribe((resproducto: any) =>
    {
      console.log(producto)
    }, err => console.error(err)
    );
    this.productoService.list().subscribe((resproducto: any) =>
    {
      this.productos = resproducto;  
      //console.log(resproducto);
      console.log(this.productos)
    }, err => console.error(err)
    );
    console.log("hola")
  }
  crearProducto(){
    $('#modalCrearProducto').modal();
    $("#modalCrearProducto").modal("open");
  }
  guardarCrearProducto()
  {
    $("#modalCrearProducto").modal("close");
  }
  buscarProducto(producto:any){
    this.productos=[];
    this.productoService.listOne(producto).subscribe((resusuario: any) =>
    {
      this.productos=[resusuario];  
    },
    err => console.error(err)
    );
  }
}
