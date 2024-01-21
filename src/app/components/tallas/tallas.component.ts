import { Component, OnInit } from '@angular/core';
import { TallasService } from '../../services/tallas.service';
import { Talla } from '../../models/tallas';
declare var $: any;
@Component({
  selector: 'app-tallas',
  templateUrl: './tallas.component.html',
  styleUrl: './tallas.component.css'
})
export class TallasComponent implements OnInit {

  tallas : Talla [] = [];
  talla : Talla = new Talla();

  constructor(private tallaService : TallasService ){}
  ngOnInit(): void {
    $(document).ready(function(){
      $('.modal').modal();
    });

    this.tallaService.list().subscribe((resTallas: any) => {
      this.tallas = resTallas;
    }, err => console.error(err)
    );
    
  }
  actualizarTalla(talla:any){
    $('#modalActualizarTalla').modal();
    $('#modalActualizarTalla').modal('open');
  }
  guardarActualizarTalla(){
    $('#modalActualizarTalla').modal('close');
  }
  eliminarTalla(talla:any){
    $('#modalEliminarTalla').modal();
    $('#modalEliminarTalla').modal('open');
  }
  guardarEliminarTalla(){
    $('#modalEliminarTalla').modal('close');
  }
  crearTalla(){
    $('#modalCrearTalla').modal();
    $('#modalCrearTalla').modal('open');
  }
  guardarCrearTalla(){
    $('#modalCrearTalla').modal('close');
  }
  buscarTalla(talla:any){
    this.tallas = [];
    this.tallaService.listOne(talla).subscribe((resTallas: any) => {
      this.tallas = [resTallas];
    }, err => console.error(err)
    );
  }
}
