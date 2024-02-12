import { Component, OnInit } from '@angular/core';
import { Producto } from './../../models/productos';
import { ProductosService } from './../../services/productos.service';
import e from 'cors';
declare var $: any;
@Component({
  selector: 'app-productos-cliente',
  templateUrl: './productos-cliente.component.html',
  styleUrl: './productos-cliente.component.css'
})
export class ProductosClienteComponent implements OnInit{
  constructor(private productosService: ProductosService){
  }
  productos: Producto[] = [];
  producto: Producto = new Producto();
  ngOnInit(): void {
    $(document).ready(function(){
      $('.dropdown-trigger').dropdown();
    });
    {
      $('.modal').modal();

    }
    this.productosService.list().subscribe((data: any) => {
      this.productos = data;
    });
  }

  buscarProducto(producto: any){
    this.productos= [];
    this.productosService.listOne(producto).subscribe((data: any) => {
      this.productos =[ data ];
    }, error => console.error(error));
  }

}
