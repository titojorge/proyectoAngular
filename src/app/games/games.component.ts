import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <ul>
      <h3>Los juegos de {{userParams}}</h3>
      @for(game of games; track game.id){
        <li (click)="fav(game.nombre)">{{game.nombre}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() userParams = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();
  fav (gameNombre:string){
    this.addFavoriteEvent.emit(gameNombre);
  }
  games = [
    {
      id : 1,
      nombre: "halo"
    },
    {
      id : 2,
      nombre: "fifa"
    },
    {
      id : 3,
      nombre: "mortal kombat"
    }
  ]
}
