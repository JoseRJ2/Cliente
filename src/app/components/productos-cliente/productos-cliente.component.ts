import { Component, OnInit } from '@angular/core';
import { Producto } from './../../models/productos';
import { ProductosService } from './../../services/productos.service';
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
}
