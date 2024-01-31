import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TallasService {

  constructor(private http:HttpClient) { }
  
  list() {
    return this.http.get(`${environment.API_URI}/api/tallas/`);
  }

  listOne(id:any){
    return this.http.get(`${environment.API_URI}/api/tallas/${id}`);
  }
  
  create(talla:any){
    return this.http.post(`${environment.API_URI}/api/tallas/create/`,talla);
  }

  update(id:any,talla:any){
    return this.http.put(`${environment.API_URI}/api/tallas/update/${id}`,talla);
  }

  delete(id:any){
    return this.http.delete(`${environment.API_URI}/api/tallas/delete/${id}`);
  }
}
