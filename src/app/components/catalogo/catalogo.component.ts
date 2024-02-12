import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    $(document).ready(function(){
      $('.modal').modal();
    });
    
    $(document).ready(function(){
      $('.carousel').carousel();
    });
  }

}
