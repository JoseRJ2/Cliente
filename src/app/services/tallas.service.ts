import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TallasService {

  constructor(private http:HttpClient) { }
  
  list() {
    return this.http.get(`${environment.API_URI}/tallas/`);
  }

  listOne(id:any){
    return this.http.get(`${environment.API_URI}/tallas/${id}`);
  }
  
  create(talla:any){
    return this.http.post(`${environment.API_URI}/tallas/create/`,talla);
  }

  update(id:any,talla:any){
    return this.http.put(`${environment.API_URI}/tallas/update/${id}`,talla);
  }

  delete(id:any){
    return this.http.delete(`${environment.API_URI}/tallas/delete/${id}`);
  }
}
