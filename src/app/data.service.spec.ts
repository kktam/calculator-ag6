import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [DataService]
  }));

  afterEach(() => {
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);
    httpMock.verify();
  });

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);
    expect(service).toBeTruthy();
    expect(httpMock).toBeTruthy();
  });

  it ('should retrieve posts from the API via GET', () => {
    const service: DataService = TestBed.get(DataService);
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);

    const dummyPosts = [
      { userId: '1', id: 1, body: 'Hello world'},
      { userId: '2', id: 2, body: 'Hello world 2'}
    ];

    service.getPosts().subscribe(posts => {
      expect(posts).toEqual(dummyPosts);
      expect(posts.toString().length).toBe(2);
    });

    const request = httpMock.expectOne(`${service.ROOT_URL}/posts`);

    expect(request.request.method).toBe('GET');
  });
});
