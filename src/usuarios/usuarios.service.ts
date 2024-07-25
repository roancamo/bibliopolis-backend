import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/model/usuario';
import { UsuarioDto } from 'src/model/usuarioDto';
@Injectable()
export class UsuariosService {
    usuarios: Usuario[]=[];
    /*Registrar un nuevo usuario (Verificar si existe el usuario según el correo ingresado)*/
    registraUsuario( usuario:Usuario):boolean{
        if(this.usuarios.length==0) {
            usuario.id= this.usuarios.length + 1;
            this.usuarios.push(usuario);
            return true;
        }else{
                if(!this.validaExisteUsuario(usuario.correoElectronico)){
                    usuario.id= this.usuarios.length + 1;
                    this.usuarios.push(usuario);
                    return true;
                }

        }
        return false;
    }

    validaExisteUsuario(email:string):boolean{
        for(let i:number=0; i<this.usuarios.length;i++){
            if(this.usuarios[i].correoElectronico.toLowerCase().trim()== email.toLowerCase().trim()){
                return true;
            }
        }
        return false;
    }
    obtenerUsuario(id:number):UsuarioDto[]{
        let usuarioDtos: UsuarioDto[]=[];
        for(let i:number=0; i<this.usuarios.length;i++){
            if(this.usuarios[i].id== id){
                  usuarioDtos.push(new UsuarioDto(this.usuarios[i].id, this.usuarios[i].nombre, this.usuarios[i].correoElectronico,this.usuarios[i].direccion, this.usuarios[i].historialPedidos));
            }
        }
        return usuarioDtos;
    }
    /*Obtener todos los usuarios (Excluir la password en la lista )*/
    obtenerUsuarios():UsuarioDto[]{
        let usuarioDto: UsuarioDto[]=[];
        for(let i:number=0; i<this.usuarios.length;i++)
        {
            usuarioDto.push(new UsuarioDto(this.usuarios[i].id, this.usuarios[i].nombre, this.usuarios[i].correoElectronico,this.usuarios[i].direccion, this.usuarios[i].historialPedidos));

        }
        return usuarioDto;
    }

      /*Eliminar un usuarios según su id*/
      eliminaUsuario(id:number):boolean{
        for (let i: number = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].id == id) {
                      this.usuarios.splice(i  , 1);
                    return true;
            }
        }        
    return false
}

}
