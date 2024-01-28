import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { RolesComponent } from './components/roles/roles.component';
import { TallasComponent } from './components/tallas/tallas.component';
const routes: Routes = [
  {
    path:"",
    redirectTo: "login",
    pathMatch: "full"
  },{
    path:"login",
    component:LoginComponent,
  },{
    path:"inicio",
    component: InicioComponent,
    children:[
      {
        path:"usuarios",
        component:UsuariosComponent
      },{
        path:"productos",
        component:ProductosComponent
      },{
        path:"clientes",
        component:ClientesComponent
      },{
        path:"roles",
        component:RolesComponent
      },{
        path:"tallas",
        component:TallasComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
