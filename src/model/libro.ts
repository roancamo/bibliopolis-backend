/*
isbn: ISBN del libro, obligatorio, único)
titulo: título del libro, obligatorio)
autor: autor del libro, obligatorio)
editorial: editorial del libro)
genero: género literario del libro)
precio: precio del libro
descripción: descripción del libro
imagen: ruta a la imagen de portada del libro
stock: cantidad de libros disponibles en stock
*/
export class Libro {
    constructor(
        public isbn: number,
        public titulo: string,
        public autor: string,
        public editorial: string,
        public genero: string,
        public precio: number,
        public descripcion: string,
        public imagen: string,
        public stock: number
    ) {   }
}