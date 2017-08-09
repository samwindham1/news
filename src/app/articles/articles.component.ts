import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  public articles: Array<any> = [];

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    // retrieve articles from the API
    this.articlesService.getAllArticles()
    .then(articles => {
      this.articles = articles;
      console.log(articles);
    });
  }
}
