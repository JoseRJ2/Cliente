import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ListarCarritoService {

  constructor(private http:HttpClient) { }
  listarCarrito(id:any){
    return this.http.get(`${environment.API_URI}/api/carritos/listarcarrito/${id}`);
  } 
}