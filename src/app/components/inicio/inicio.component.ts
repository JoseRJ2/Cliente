import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    $(document).ready(function(){
      $('.carousel').carousel();
    });
  }
}
