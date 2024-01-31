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
    return this.http.get(`${environment.API_URI}/api/productos/`);
  }
  delete(id:any) {
    return this.http.delete(`${environment.API_URI}/api/productos/delete/${id}`);
  }
  listOne(id:any) {
    return this.http.get(`${environment.API_URI}/api/productos/${id}`);
  }
  update(id:any, data:any) {
    return this.http.put(`${environment.API_URI}/api/productos/update/${id}`, data);
  }
  create(data:any) {
    return this.http.post(`${environment.API_URI}/api/productos/create`, data);
  }
}
