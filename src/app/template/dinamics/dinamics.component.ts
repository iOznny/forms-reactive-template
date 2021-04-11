import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string;
  favorites: Favorites[];
}

interface Favorites {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})

export class DinamicsComponent {

  // Permite buscar un elemento a traves de una referencia local #referencia
  @ViewChild('form') form!: NgForm;

  public newgame: string = '';
  public person: Person = {
    name: 'Demo',
    favorites: [
      { id: 1, name: 'GTAV' },
      { id: 2, name: 'Valorant' },
      { id: 3, name: 'Minecraft' },
      { id: 4, name: 'Anerican Truck' },
      { id: 5, name: 'Rocket League' },
    ]
  }

  nameInvalid(): boolean {
    return this.form?.controls.name?.invalid && this.form?.controls.name?.touched;
  }

  //Agregar elemento.
  add() {
    const game_fav: Favorites = {
      id: this.person.favorites.length + 1,
      name: this.newgame
    }

    // Agregamos el juego.
    this.person.favorites.push({...game_fav});

    // Limpiamos el objeto del agregar game.
    this.newgame = '';
  }

  // Eliminar elemento.
  delete(index: number) {
    this.person.favorites.splice(index, 1);
  }

}
