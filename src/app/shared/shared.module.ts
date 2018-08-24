import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-helpers/article-list/article-list.component';
import { ArticleMetaComponent } from './article-helpers/article-meta/article-meta.component';
import { ArticlePreviewComponent } from './article-helpers/article-preview/article-preview.component';
import { FavoriteButtonComponent } from './buttons/favorite-button/favorite-button.component';
import { FollowButtonComponent } from './buttons/follow-button/follow-button.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArticleListComponent, ArticleMetaComponent, ArticlePreviewComponent, FavoriteButtonComponent, FollowButtonComponent, FooterComponent, HeaderComponent]
})
export class SharedModule { }
