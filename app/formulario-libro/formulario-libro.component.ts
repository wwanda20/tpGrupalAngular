import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { LibrosService } from '../libros.service';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-formulario-libro',
  templateUrl: './formulario-libro.component.html',
  styleUrls: ['./formulario-libro.component.css']
})
export class FormularioLibroComponent implements OnInit {

  @Output() hayUnNuevoLibro = new EventEmitter();

  libro = {
    name: '',
    author: '',
    lended:'',
    gender: '',
  };
  
  genero:any;

 /*constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    
  }


  async agregarLibro(){    //nuevo libro
    //creo la estructura de libro 
    var libro ={
      name: this.name,
      author: this.author,
      lended: this.lended,
      gender: this.gender

    }

    //Envio estructura libro al metodo creado en el service
    var respuesta: any;
    respuesta = await this.librosService.guardarLibro(libro);

    this.hayUnNuevoLibro.emit();  //aviso que guarde el libro
    */  
   //prueba para generosService
  constructor(private generosService: GenerosService) { }

  ngOnInit(): void {
    this.genero = this.generosService.listaGeneros();

    console.log('generos',this.genero);
  }
   guardar(){
     console.log("Este libro voy a guardar", this.libro);
   }
  }

  


