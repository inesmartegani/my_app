import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private api = 'https://fakestoreapi.com/products';

  constructor(
    private http: HttpClient,
  ) { }

  getAll() {
    this.http.get<any[]>(this.api)
  }
}
