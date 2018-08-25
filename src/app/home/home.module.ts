import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeAuthResolver } from './home-auth-resolver.service';
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';
import { FeaturedComponent } from './featured/featured.component';
import { AllStoryComponent } from './all-story/all-story.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    FeaturedComponent,
    AllStoryComponent
  ],
  providers: [
    HomeAuthResolver
  ]
})
export class HomeModule {}
