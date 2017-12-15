import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Response } from '@angular/http';
import { AppError } from '../common/app-errors';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];
  constructor(private service: PostService) {
    // http.get(this.url).subscribe(response => {
    //   // console.log(response.json());
    //   this.posts = response.json()
    // });
  }

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    this.service.getAll().subscribe(posts =>  this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    const post = {title: input.value};
    this.posts.splice(0, 0, post);
    input.value = '';
   this.service.create(post)
    .subscribe(
      newPost => {
      post['id'] = newPost.id;
     // this.posts.splice(0, 0, post); pesimistic
      console.log(newPost);
    },
      (error: AppError) => {
      this.posts.splice(0, 1);

        if (error instanceof BadRequestError) {
          // this.form.setErrors(errors.jason());
          // this.form.setErrors(error.originalError); // if there are  customs errors si haces las clases con errores
        } else {
          throw error;
          // alert('An unexpected error ocurred');
          // console.log(error);
        }
    });
  }// create Post

  updatePost(post) {
    this.service.update(post)
    .subscribe(
      updatedPost => {
      console.log(updatedPost);
      // no hay caso especial se deja que el error se controle con el globahandler
    });
   // this.http.put(this.url,JSON.stringify(post));
  }

  deletePost(post) {
    console.log(post.id);
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.delete(post.id)
    .subscribe(
      () => {
      // console.log(response);
     // const index = this.posts.indexOf(post);
    //  this.posts.splice(index, 1);
    },
      (error: AppError) => {
        this.posts.splice(index, 0 , post);
        if (error instanceof NotFoundError) {
          alert('this post has already been deleted');
        } else {
          throw error; // hay caos especial. si no es el caso especia se manda para arriba
          // alert('An unexpected error ocurred');
          // console.log(error);
        }
    });
  }

}
