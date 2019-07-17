import { Injectable } from '@angular/core';
import { Libro, libros} from '../../data/libros-list';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  libros: Array<Libro> = libros;

  constructor() { }

listaLibros() {

  return this.libros;
}

libroSeleccion(id: string) {
  let libroItem: Libro;

  this.libros.forEach((singleLibro) => {
    if (singleLibro.id === Number(id)) {
      libroItem = singleLibro;
    }
  });
  return libroItem;
}

}
