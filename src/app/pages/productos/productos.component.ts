import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor(
    private productoService: ProductoService,

  ) { }

  ngOnInit(): void {
  }

}
