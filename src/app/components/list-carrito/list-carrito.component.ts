import { Component, OnInit } from '@angular/core';
import { ListarCarritoService } from './../../services/listar-carrito.service'
import { ListarCarrito } from './../../models/listCarrito';
declare var $: any;
@Component({
  selector: 'app-list-carrito',
  templateUrl: './list-carrito.component.html',
  styleUrl: './list-carrito.component.css'
})
export class ListCarritoComponent implements OnInit{
  constructor(private listarCarritoService : ListarCarritoService ){}
  listarCarrito : ListarCarrito [] = [];
  carrito: ListarCarrito = new ListarCarrito()
  ngOnInit(): void {
    $(document).ready(function()
    {
      $('.modal').modal();

    });
  }

  buscarProductos(id : any){
    this.listarCarritoService.listarCarrito(id).subscribe((relista: any) =>
    {
      this.listarCarrito = relista;  
      console.log(relista);
    }, error => console.error(error));
  }

}
