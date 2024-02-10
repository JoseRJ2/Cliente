import { Component,OnInit } from '@angular/core';
import { Venta } from 'app/models/ventas';
import { VentasService } from 'app/services/ventas.service';
declare var $: any;
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css'
})
export class VentasComponent implements OnInit{
  ventas: Venta[] = []
  venta: Venta = new Venta();
  ventaM: Venta = new Venta();
  ventaE: Venta = new Venta();
  constructor(private ventaService: VentasService) { }

  ngOnInit(): void {
    $(document).ready(function()
    {
      $('.modal').modal();

    });
    this.ventaService.list().subscribe((resusuario: any) =>
    {
      this.ventas = resusuario;
      console.log(this.ventas);
    },
    err => console.error(err)
    );
  }

  buscarVenta(id: number){
    this.ventas=[]
    this.ventaService.listOne(id).subscribe((resusuario: any) =>
    {
      this.ventas.push(resusuario);
    }, err => console.error(err));
  }
  actualizarVenta(venta:any){
    this.ventaM.id = venta;
    this.ventaService.listOne(venta).subscribe((resusuario: any) =>
    {
      this.ventaM = resusuario;
    }, err => console.error(err));
    $("#modalModificarVenta").modal("open");
  }
  guardarActualizarVenta(){
    this.ventaService.update(this.ventaM.id,this.ventaM).subscribe(() =>
    {
      this.ventaService.list().subscribe((resusuario: any) =>
      {
        this.ventas = resusuario;
      }, err => console.error(err));
    }, err => console.error(err));
    $("#modalModificarVenta").modal("close");
  }
  eliminarVenta(id: number){
    this.ventaE.id = id;
    $("#modalEliminarVenta").modal("open");
  }
  guardarEliminarVenta(){
    this.ventaService.delete(this.ventaE.id).subscribe(() =>
    {
      this.ventaService.list().subscribe((resusuario: any) =>
      {
        this.ventas = resusuario;
      }, err => console.error(err));
    }, err => console.error(err));
    $("#modalEliminarVenta").modal("close");
  }
}
