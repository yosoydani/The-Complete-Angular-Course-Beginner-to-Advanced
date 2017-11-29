import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite-star',
  templateUrl: './favorite-star.component.html',
  styleUrls: ['./favorite-star.component.css']
})

export class FavoriteStarComponent implements OnInit {

  // alias entre parentesis sirve para uqe aunq cambie le código aqui en la vista del componente anfitrion no cambie.
  @Input('isFavorite') isFavorite: boolean;
  @Output('change') change = new EventEmitter();

  // ejemplo de mosh pero toogleFavorite es mejor
  // onClick() {
  //   this.isFavorite = !this.isFavorite;
  //   this.change.emit();
  // }
  constructor () {}

  ngOnInit() {

  }
  // old code
  // isFavorite=false;
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    // this.change.emit(this.isFavorite);
    this.change.emit({newValue: this.isFavorite});
    console.log('favorite is: ' + this.isFavorite);
  }

} // class
// interface para el objeto que se para por evento
export interface FavoriteChangedEventARgs {
  newValue: boolean;
}
