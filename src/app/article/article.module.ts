import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCommentComponent } from './article-comment/article-comment.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArticleCommentComponent, ArticleComponent]
})
export class ArticleModule { }
