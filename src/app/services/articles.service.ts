import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ArticlesService {

  constructor(private http: Http) { }

  // get all articles from the api
  getAllArticles(): Promise<any[]> {
    return this.http.get('/api/articles')
    .toPromise()
    .then(res => res.json() as any[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An Error occurred', error); // demo purposes
    return Promise.reject(error.message || error);
  }

}
