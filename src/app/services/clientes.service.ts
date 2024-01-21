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
}
