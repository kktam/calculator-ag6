import { Component, OnInit } from '@angular/core';

import { DataService } from './../data.service';

import { Post } from './../model/Posts';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
  providers: [DataService]
})
export class CalcComponent implements OnInit {

  posts: Post[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.posts = this.dataService.getPosts();
  }

}
