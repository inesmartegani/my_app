import { Rating } from "./rating";

export class Producto {
    title ='';
    description = ''; 
    id = 0;
    image = '';
    price = 0;
    category= '';
    rating= new Rating(); //importo la clase rating arriba
}
