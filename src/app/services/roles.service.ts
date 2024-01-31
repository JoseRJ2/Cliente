import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http:HttpClient) { }
  list() {
    return this.http.get(`${environment.API_URI}/api/roles/`);
  }

  listOne(id:any){
   return this.http.get(`${environment.API_URI}/api/roles/${id}`);
  }
  
  create(rol:any){
    return this.http.post(`${environment.API_URI}/api/roles/create/`,rol);
  }

  update(id:any,rol:any){
    return this.http.put(`${environment.API_URI}/api/roles/update/${id}`,rol);
  }

  delete(id:any){
    return this.http.delete(`${environment.API_URI}/api/roles/delete/${id}`);
  }
}
