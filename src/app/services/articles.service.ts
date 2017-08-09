import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticlesService {

  constructor(private http: Http) { }

  private articlesUrl = '/api/articles';
  // get all articles from the api
  getAllArticles(): any {
    return this.http.get(this.articlesUrl)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Internal Server Error'));
  }

}
