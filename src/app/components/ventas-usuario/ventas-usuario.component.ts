import { Component, OnInit } from '@angular/core';
import { Venta } from './../../models/ventas';
import { VentasService } from './../../services/ventas.service';
@Component({
  selector: 'app-ventas-usuario',
  templateUrl: './ventas-usuario.component.html',
  styleUrl: './ventas-usuario.component.css'
})
export class VentasUsuarioComponent implements OnInit{
  ventas: Venta[] = [];
  constructor(private ventasService: VentasService) { }
  ngOnInit(): void {
      this.ventasService.list().subscribe((data: any) => {
        this.ventas = data;
    }, err => console.error(err));
  }
}
