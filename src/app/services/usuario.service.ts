import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }
  list() {
    return this.http.get(`${environment.API_URI}/api/usuarios/`);
  } 
    
  existe(usuario: any, contrasena: any){ 
    return this.http.post(`${environment.API_URI}/api/usuarios/ValidarUsuario/`,{"usuario": usuario ,"contrasena": contrasena});
  }
  
  listOne(id_usuario : any) {
    return this.http.get(`${environment.API_URI}/api/usuarios/${id_usuario}`);
  }

  delete(id_usuario: any){
    return this.http.delete(`${environment.API_URI}/api/usuarios/delete/${id_usuario}`);
  }

  update(id_usuario: any, usuario: any){
    return this.http.put(`${environment.API_URI}/api/usuarios/update/${id_usuario}`,usuario);
  }

  create(usuario: any){
    return this.http.post(`${environment.API_URI}/api/usuarios/create`,usuario);
  }
}
