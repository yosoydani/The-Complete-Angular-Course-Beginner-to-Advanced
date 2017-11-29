import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  body: string;
 @Input('isLiked') isLiked: boolean;
 @Input('likesCount') likesCount: number;

 onLikeChange() {
   this.isLiked = !this.isLiked;
   (this.isLiked) ? this.likesCount++ : this.likesCount--;
 }

  constructor() { }

  ngOnInit() {
  }

}

interface Itweet {
  body: string;
  isLiked: boolean;
  likesCount: number;
}
