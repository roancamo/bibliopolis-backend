/*
libro: libro que forma parte del pedido
cantidad: cantidad de libros del mismo tipo en el pedido

*/
import { Libro } from "./libro";
export class ItemPedido {
    constructor(
        public libro: Libro,
        public cantidad:  number
                ) {   }
}