import { Component, OnInit } from '@angular/core';
import { Post } from 'src/services/PostsModel';
import { Title } from '@angular/platform-browser';
import { Alert } from 'selenium-webdriver';


@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.scss']
})
export class SocialPostsComponent implements OnInit {

  constructor() {
    this.Posts = new Array<Post>();
  }

  Posts: Array<Post>;
  tempTitle: string;


  ngOnInit() {
  }
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
  }

  Delete(i)
  {
    this.Posts.splice(i, 1);
  }
}
