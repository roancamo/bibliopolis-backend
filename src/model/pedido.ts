/*
id: identificador único del pedido, generado automáticamente
usuario: usuario que realizó el pedido
fechaPedido:fecha en la que se realizó el pedido
estado: estado actual del pedido: "pendiente", "en proceso", "enviado", "entregado"
total: precio total del pedido (Calculado)
items: lista de ítems que componen el pedido

*/
import { Usuario } from "./usuario";
import { ItemPedido } from "./ItemPedido";
export class Pedido {
    constructor(
        public id: number,
        public usuario: Usuario,
        public fechaPedido: Date,
        public estado: string,
        public total: number,
        public items:ItemPedido[]
    ) {   }
}