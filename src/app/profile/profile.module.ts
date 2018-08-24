import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileArticlesComponent } from './profile-articles/profile-articles.component';
import { ProfileFavoritesComponent } from './profile-favorites/profile-favorites.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProfileArticlesComponent, ProfileFavoritesComponent, ProfileComponent]
})
export class ProfileModule { }
