import { Component } from '@angular/core';
import { FavoriteChangedEventARgs } from './favorite-star/favorite-star.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  post = {
    title: 'post 01',
    isFavorite: false
  };
  tweet = {
    body: 'Here is the body of the tweet',
    isLiked: false,
    likesCount: 0
  };

  onFavoriteChange(eventArgs: FavoriteChangedEventARgs) {
    console.log(`favorite has changed from ${!eventArgs.newValue}` , eventArgs);
  }
}
