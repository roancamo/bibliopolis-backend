import { Pedido } from "./pedido";
 export class UsuarioDto {
    constructor(
        public id: number,
        public nombre: string,
        public correoElectronico: string,
        public direccion: string,
        public historialPedidos: Pedido[] 
    ) {    }
}