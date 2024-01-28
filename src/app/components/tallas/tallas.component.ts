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
  tallaM : Talla = new Talla();
  tallaE : Talla = new Talla();
  tallaC : Talla = new Talla();
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
    this.tallaM.id=talla;
    this.tallaService.listOne(this.tallaM.id).subscribe((resTallas: any) => {
      this.tallaM = resTallas;
    }, err => console.error(err)
    );
    $('#modalActualizarTalla').modal('open');
  }
  guardarActualizarTalla(){
    $('#modalActualizarTalla').modal('close');
    this.tallaService.update(this.tallaM.id,this.tallaM).subscribe(() => {
      this.tallaService.list().subscribe((resTallas: any) => {
        this.tallas = resTallas;
      }, err => console.error(err));
    }, err => console.error(err));
  }
  eliminarTalla(talla:any){
    this.tallaE.id=talla;
    $('#modalEliminarTalla').modal('open');
  }
  guardarEliminarTalla(){
    $('#modalEliminarTalla').modal('close');
    this.tallaService.delete(this.tallaE.id).subscribe(() => {
      this.tallaService.list().subscribe((resTallas: any) => {
        this.tallas = resTallas;
      }, err => console.error(err));
    }, err => console.error(err));
  }
  crearTalla(){
    $('#modalCrearTalla').modal('open');
  }
  guardarCrearTalla(){
    $('#modalCrearTalla').modal('close');
    this.tallaService.create(this.tallaC).subscribe(() => {
      this.tallaService.list().subscribe((resTallas: any) => {
        this.tallas = resTallas;
      }, err => console.error(err));
    }, err => console.error(err));
  }
  buscarTalla(talla:any){
    this.tallas = [];
    this.tallaService.listOne(talla).subscribe((resTallas: any) => {
      this.tallas = [resTallas];
    }, err => console.error(err)
    );
  }
}
