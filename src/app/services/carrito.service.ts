import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http: HttpClient) { }
  agregar(carrito:any,producto:any,cantidad:any){
    return this.http.post(`${environment.API_URI}/api/carritos/agregar/`,{"idCarrito":carrito,"idProducto":producto,"cantidad":cantidad});
  }
  list(){
    return this.http.get(`${environment.API_URI}/api/carritos/`);
  }
  create(carrito:any){
    return this.http.post(`${environment.API_URI}/api/carritos/create/`,carrito);
  }
  listOne(id:any){
    return this.http.get(`${environment.API_URI}/api/carritos/${id}`);
  }
  listcarrito(id:any){
    return this.http.get(`${environment.API_URI}/api/carritos/${id}`);
  }
}
