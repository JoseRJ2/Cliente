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
import { ListCarritoComponent } from './components/list-carrito/list-carrito.component';
import { CarritoAdminComponent } from './components/carrito-admin/carrito-admin.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
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
      },{
        path: "carritos",
        component:CarritoAdminComponent
      }
    ]
  },{
    path:"home",
    component:HomeComponent,
    children:[
      {
        path:"catalogo",
        component: CatalogoComponent
      },{
        path:"productosC",
        component:ProductosClienteComponent
      },{
        path:"carritos",
        component: CarritoComponent
      },{
        path:"ventas",
        component:VentasUsuarioComponent
      },{
        path:"ListarCarritos",
        component:ListCarritoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
