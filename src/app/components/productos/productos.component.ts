import { Component,OnInit } from '@angular/core';
import { ProductosService } from './../../services/productos.service';
import { Producto } from './../../models/productos';
import { Talla } from './../../models/tallas';
import { TallasService } from './../../services/tallas.service';
declare var $: any;
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  productos : Producto [] = [];
  tallas : Talla [] = [];
  producto :Producto= new Producto();
  productoM :Producto= new Producto();
  productoE : Producto = new Producto();
  productoC : Producto = new Producto();
  constructor(private productoService : ProductosService, private tallasService : TallasService){  
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
    this.productoService.listOne(id_usuario).subscribe((resusuario: any) =>
    {
      this.productoM=resusuario;  
    }, err => console.error(err));
    this.tallasService.list().subscribe((restalla: any) =>
    {
      this.tallas = restalla;  
    }, err => console.error(err));
    $("#modalModificarProducto").modal("open");
  }

  guardarActualizarProducto()
  {
    this.productoService.update(this.productoM.id,this.productoM).subscribe(() =>
    {
      this.productoService.list().subscribe((resproducto: any) =>
      {
        this.productos = resproducto;  
      }, err => console.error(err));
    },err => console.error(err));
    $("#modalModificarProducto").modal("close");
  }

  eliminarProducto(producto:any){
    this.productoE.id=producto;
    $("#modalEliminarProducto").modal("open");
  }

  guardarEliminarProducto(){
    $("#modalEliminarProducto").modal("close");
    this.productoService.delete(this.productoE.id).subscribe(() =>
    {
      this.productoService.list().subscribe((resproducto: any) =>
      {
        this.productos = resproducto;  
      }, err => console.error(err));
    }, err => console.error(err));
  }

  crearProducto(){
    this.productoC = new Producto();
    this.tallasService.list().subscribe((restalla: any) =>
    {
      this.tallas = restalla;  
    }, err => console.error(err));
    $("#modalCrearProducto").modal("open");
  }

  guardarCrearProducto()
  {
    $("#modalCrearProducto").modal("close");
    this.productoService.create(this.productoC).subscribe(() =>
    {
      this.productoService.list().subscribe((resproducto: any) =>
      {
        this.productos = resproducto;  
      }, err => console.error(err));
    }, err => console.error(err));
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
