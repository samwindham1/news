import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ArticlesService } from './services/articles.service';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';

const ROUTES = [
  {
    path: '',
    component: ArticlesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    ArticlesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
