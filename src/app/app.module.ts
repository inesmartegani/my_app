import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { LoginComponent } from './pages/login/login.component';

import { UsuarioService } from './service/usuario.service';
import { ProductoService} from './service/producto.service';
import { CarritoService } from './service/carrito.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    ProductosComponent,
    CarritoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [
    UsuarioService,
    ProductoService,
    CarritoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
