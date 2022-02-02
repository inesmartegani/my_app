import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/class/producto';
import { ProductoService } from 'src/app/service/producto.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];
  loading = true;

  constructor(
    private productoService: ProductoService,

  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
      this.productoService.getAll()
        .subscribe(prods => {
          console.log(prods);
          this.loading = false;
          this.productos = prods; 
          }, e => {
          console.log(e);
          this.loading = false;
        })
  };
}
