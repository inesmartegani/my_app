import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './pages/error/error.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ProdCardComponent } from './components/prod-card/prod-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    ProductosComponent,
    CarritoComponent,
    LoginComponent,
    HeaderComponent,
    NavbarComponent,
    ErrorComponent,
    LoginFormComponent,
    SpinnerComponent,
    ProdCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    UsuarioService,
    ProductoService,
    CarritoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
