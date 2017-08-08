import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    // retrieve posts from the API
    // this.posts = this.postsService.getAllPosts()
    // .then(posts => {
    //   this.posts = posts;
    // })
    // .catch(error => {
    //   console.error('An Error occurred', error); // demo purposes
    //   return Promise.reject(error.message || error);
    // });

  }


}
