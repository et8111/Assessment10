import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialPostsComponent} from 'src/social-posts/social-posts.component';
import { componentFactoryName } from '@angular/compiler';

const routes: Routes = [{path: '', component: SocialPostsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
