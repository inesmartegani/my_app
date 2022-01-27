import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/service/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  constructor(
    private carritoService: CarritoService,
  ) { }

  ngOnInit(): void {
  }

}
