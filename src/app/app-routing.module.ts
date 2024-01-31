import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { RolesComponent } from './components/roles/roles.component';
import { TallasComponent } from './components/tallas/tallas.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ProductosClienteComponent } from './components/productos-cliente/productos-cliente.component';
import { HomeComponent } from './components/home/home.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { VentasUsuarioComponent } from './components/ventas-usuario/ventas-usuario.component';
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
      },{
        path:"ventas",
        component:VentasComponent
      }
    ]
  },{
    path:"home",
    component:HomeComponent,
    children:[
      {
        path:"productosC",
        component:ProductosClienteComponent
      },{
        path:"carritos",
        component: CarritoComponent
      },{
        path:"ventas",
        component:VentasUsuarioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
