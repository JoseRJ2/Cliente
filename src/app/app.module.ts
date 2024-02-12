import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { RolesComponent } from './components/roles/roles.component';
import { TallasComponent } from './components/tallas/tallas.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ProductosClienteComponent } from './components/productos-cliente/productos-cliente.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarusuarioComponent } from './components/navbarusuario/navbarusuario.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { VentasUsuarioComponent } from './components/ventas-usuario/ventas-usuario.component';
import { ListCarritoComponent } from './components/list-carrito/list-carrito.component';
import { CarritoAdminComponent } from './components/carrito-admin/carrito-admin.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    NavbarComponent,
    UsuariosComponent,
    ProductosComponent,
    ClientesComponent,
    RolesComponent,
    TallasComponent,
    VentasComponent,
    ProductosClienteComponent,
    FooterComponent,
    HomeComponent,
    NavbarusuarioComponent,
    CarritoComponent,
    VentasUsuarioComponent,
    ListCarritoComponent,
    CarritoAdminComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
