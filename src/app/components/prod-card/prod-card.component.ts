import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/class/producto';

@Component({
  selector: 'prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.scss']
})
export class ProdCardComponent implements OnInit {
  @Input() prod: Producto = new Producto();

  constructor() { }

  ngOnInit(): void {
  }

}
