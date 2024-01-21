import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) {
  }

  list() {
    return this.http.get(`${environment.API_URI}/productos/`);
  }
  delete(id:any) {
    return this.http.delete(`${environment.API_URI}/productos/${id}`);
  }
  listOne(id:any) {
    return this.http.get(`${environment.API_URI}/productos/${id}`);
  }
}
