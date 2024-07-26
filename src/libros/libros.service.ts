import { Injectable } from '@nestjs/common';
import { Libro } from 'src/model/libro';
import { Usuario } from 'src/model/usuario';
@Injectable()
export class LibrosService {
        libros:Libro[]=[]
        creaLibro( libro:Libro):boolean{
            if(this.libros.length==0) {
                this.libros.push(libro);
                return true;
            }else{
                    if(!this.validaExisteIsbn(libro.isbn)){
                        this.libros.push(libro);
                        return true;
                    }
    
            }
            return false;
        }

        validaExisteIsbn(isbn:number):boolean{
            for(let i:number=0; i<this.libros.length;i++){
                if(this.libros[i].isbn == isbn){
                    return true;
                }
            }
            return false;
        }
        obtieneLibro(isbn:number):Libro{
           for(let i:number=0; i<this.libros.length;i++){
                if(this.libros[i].isbn == isbn){
                    return this.libros[i];                      
                }
            }
          
        }
        obtieneLibros(autor?:string, genero?: string):Libro[]{
            if(!autor || !genero) {
                return this.libros;
            }
            else{
                return this.libros.filter( (n => n.autor.toLowerCase().trim().startsWith(autor.toLowerCase().trim()) ) ||
                (n => n.genero.toLowerCase().trim().startsWith(genero.toLowerCase().trim()) ) );
            }


            
        }

        eliminaLibro(isbn:number):boolean{
            for (let i: number = 0; i < this.libros.length; i++) {
                if (this.libros[i].isbn == isbn) {
                          this.libros.splice(i  , 1);
                        return true;
                }
            }        
        return false
    }
        
}
