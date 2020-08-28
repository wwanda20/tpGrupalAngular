import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GenerosService {
  
  //establezco los generos y id dentro de un array
  generosLibros = [
    {
      id: 'idAventura',
      genero: 'Aventura'
    },
    {
      id: 'idFiccion',
      genero: 'Ficcion'
    },
    {
      id: 'idNovela',
      genero: 'Novela'
    },
    {
      id: 'idTerror',
      genero: 'Terror'
    },
  ];


  constructor() { }
  
  //metodo que devuelve el listado de los generos
  listaGeneros(){
    return this.generosLibros;
  }
  
}


