import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';
import { response } from 'express';
import { Usuario } from 'src/model/usuario';
import { UsuariosService } from './usuarios.service';
import { UsuarioDto } from 'src/model/usuarioDto';
@Controller('usuarios')
export class UsuariosController {

    constructor(private readonly servicio:UsuariosService){

    }
    /*Registrar un nuevo usuario*/ 
   @Post() 
   registraUsuario(@Body() usuario:Usuario,@Res() response  ){
    let registra= this.servicio.registraUsuario(usuario);
    if(registra){

        return response.status(200).send(usuario);
    }
    else{
        return response.status(500).send('Usuario no creado');
    }
   }
   /*Obtener un usuario según su id*/
   @Get(':id')
   obtenerUsuario(@Param('id') id:number, @Res() response):UsuarioDto[]{
    let usuario= this.servicio.obtenerUsuario(id);
    if(usuario){
        return response.status(200).send(usuario);
    }
    else{
        return response.status(404).send('usuario no existe');
    }
   }
   /*Obtener todos los usuarios*/
   @Get()
   obtenerUsuarios():UsuarioDto[]{
        return this.servicio.obtenerUsuarios();
   }
   /*Eliminar un usuario según su id*/
   @Delete(':id')
   eliminaUsuario(@Param('id') id:number, @Res() response){
    let elimina= this.servicio.eliminaUsuario(id);
    if(elimina){
        return response.status(200).send('usuario eliminado');
    }
    else{
        return response.status(404).send('usuario no existe');
    }
   }
}
