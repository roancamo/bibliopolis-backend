 /*
 Usuario:
id: identificador único del usuario, generado automáticamente
nombre: nombre del usuario
correoElectronico: correo electrónico del usuario, único
contrasena: String  contraseña del usuario
direccion: String dirección de envío del usuario
historialPedidos: lista de pedidos realizados por el usuario

*/
 export class Usuario {
    constructor(
        public id: number,
        public nombre: string,
        public correoElectronico: string,
        public contrasena: string,
        public direccion: string,
        public historialPedidos: string 
    ) {    }
}