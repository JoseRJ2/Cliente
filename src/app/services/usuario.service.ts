import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }
  list() {
    return this.http.get(`${environment.API_URI}/usuarios/`);
  } 
    
  existe(correo : any, password : any){ 
    return this.http.post(`${environment.API_URI}/usuarios/ValidarUsuario`,{"correo":correo, "contrasena":password});
  }
}
