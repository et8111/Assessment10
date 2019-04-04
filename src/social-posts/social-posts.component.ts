import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/services/PostsModel';
import {RedGreen} from '../services/Animations';


@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.scss'],
  animations: [ RedGreen.changeState ]
  
})
export class SocialPostsComponent implements OnInit {
  @Input() currentState;
  constructor() {
    this.Posts = new Array<Post>();
  }

  ngOnInit() {
  }

  Posts: Array<Post>;
  tempTitle: string;
  title = 'Assessment10Angular';

  
  NewPost() {
    this.Posts.forEach(a => a.hidden = false);
    if (this.tempTitle == '' || this.tempTitle == null)
      return;
    this.Posts.unshift(new Post(this.tempTitle));
    this.tempTitle = '';
  }
  NewComment(v) {
    this.Posts[v].comments.push(this.Posts[v].tempComment);
    this.Posts[v].tempComment = '';
  }

  boxHider(i) {
    this.Posts.forEach(a => a.hidden = false);
    if (this.Posts[i].hidden == true)
      this.Posts[i].hidden = false;
    else if (this.Posts[i].hidden == false)
      this.Posts[i].hidden = true;
      this.Posts[i].toState = (this.Posts[i].toState === 'expanded' ? 'collapsed' : 'expanded');
      //(this.Posts[i]. toState == 'state1')?this.Posts[i]. toState = 'state2': this.Posts[i]. toState = 'state1';
  }

  Delete(i)
  {
    this.Posts.splice(i, 1);
  }


}
