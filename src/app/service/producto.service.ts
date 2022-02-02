import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../class/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private httpService: HttpClient,
  ) { }

  /**
   * 
   * @returns
   */

  getAll(): Observable<Producto[]> { // import Producto arriba
    const url = 'https://fakestoreapi.com/products';

    return this.httpService.get<Producto[]>(url);
  }
}
