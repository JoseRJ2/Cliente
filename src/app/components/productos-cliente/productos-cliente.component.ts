import { Component, OnInit } from '@angular/core';
import { AddProduct } from './../../models/añadirProductos';
declare var $: any;
@Component({
  selector: 'app-productos-cliente',
  templateUrl: './productos-cliente.component.html',
  styleUrl: './productos-cliente.component.css'
})
export class ProductosClienteComponent implements OnInit{
  addProduct : AddProduct = new AddProduct();
  constructor(){
  }
  ngOnInit(): void {
    $(document).ready(function(){
      $('.dropdown-trigger').dropdown();
    });
    {
      $('.modal').modal();

    }
  }
  agregarProductoCarrito(){
    $("#modalAñadirProductos").modal("open");
  }

  guardarAgregarProductoCarrito(){
    $("#modalAñadirProductos").modal("close");
  }
}
