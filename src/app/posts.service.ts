import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // get all posts from the api
  getAllPosts(): Promise<any> {
    return this.http.get('/api/posts')
    .toPromise()
    .then(res => res.json().data)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An Error occurred', error); // demo purposes
    return Promise.reject(error.message || error);
  }

}
