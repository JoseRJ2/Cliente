import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpClient) { }
  list(){
    return this.http.get(`${environment.API_URI}/api/ventas/`);
  }
  listOne(id: any){
    return this.http.get(`${environment.API_URI}/api/ventas/${id}`);
  }
  create(venta: any){
    return this.http.post(`${environment.API_URI}/api/ventas/create`,venta);
  }
  update(id: any,venta: any){
    return this.http.put(`${environment.API_URI}/api/ventas/update/${id}`,venta);
  }
  delete(id: any){
    return this.http.delete(`${environment.API_URI}/api/ventas/delete/${id}`);
  }
  listarventasfecha(fecha: any){
    return this.http.post(`${environment.API_URI}/api/ventas/listarventasfecha/`,fecha);
  }
}
