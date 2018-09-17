import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TEST_Posts } from './mock.data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public ROOT_URL = 'http://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getPosts() {
    // return this.http.get(`${this.ROOT_URL}/posts`);
    return TEST_Posts;
  }
}
