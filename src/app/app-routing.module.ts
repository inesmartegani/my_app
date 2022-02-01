import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import {ErrorComponent} from './pages/error/error.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  }, 
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'carrito',
    component: CarritoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component:ErrorComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
