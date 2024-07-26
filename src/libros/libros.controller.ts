import { Body, Controller, Delete, Get, Param, Post, Query, Res } from '@nestjs/common';
import { response } from 'express';
import { Libro } from 'src/model/libro';
import { LibrosService } from './libros.service';
@Controller('libros')
export class LibrosController {
    constructor(private readonly servicio:LibrosService){

    }
/*crear un nuevo libro*/
@Post()
creaLibro(@Body() libro:Libro, @Res() response){
    let crea= this.servicio.creaLibro(libro);
    if(crea){

        return response.status(200).send(libro);
    }
    else{
        return response.status(500).send('libro ya existe');
    }
}

@Get(':isbn')
obtieneLibro(@Param('isbn') isbn:number, @Res() response):Libro{

    let libro= this.servicio.obtieneLibro(isbn);
    if(libro){
        return response.status(200).send(libro);
    }
    else{
        return response.status(404).send('libro no existe');
    }
}
@Get()
obtieneLibros(@Query('autor') autor:string, @Query('genero') genero:string ,
@Res() response):Libro[]{
    let retorno = this.servicio.obtieneLibros(autor,genero);
    if(retorno.length > 0){
        return response.status(200).send(retorno);
    }
    else{
        return response.status(404).send('no existen resultados para la busqueda');
    }
  //  return  this.servicio.obtieneLibros(autor,genero);
}
@Delete(':isbn')
eliminaLibro(@Param('isbn') isbn:number, @Res() response){

    let elimina= this.servicio.eliminaLibro(isbn);
    if(elimina){
        return response.status(200).send('libro eliminado');
    }
    else{
        return response.status(404).send('libro no existe');
    }
   }

}
