import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }
  list() {
    return this.http.get(`${environment.API_URI}/clientes/`);
  }

  listOne(id:any) {
    return this.http.get(`${environment.API_URI}/clientes/${id}`);
  }

  create(cliente:any) {
    return this.http.post(`${environment.API_URI}/clientes/create`,cliente);
  }

  update(id:any, cliente:any) {
    return this.http.put(`${environment.API_URI}/clientes/update/${id}`, cliente);
  }

  delete(id:any) {
    return this.http.delete(`${environment.API_URI}/clientes/delete/${id}`);
  }
}
