// Angular imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TorreService {

  constructor(private http: HttpClient) { }

  searchPeople(offset = 0, size = 10, aggregate = false) {
    return new Promise(resolve => {
      const endpoint = 'https://search.torre.co/people/_search/';
      this.http.post(endpoint, null)
        .subscribe(data => resolve(data), error => resolve(null));
    });
  }

  searchJobs(offset = 0, size = 10, aggregate = false) {
    return new Promise(resolve => {
      const endpoint = 'https://search.torre.co/opportunities/_search/';
      this.http.post(endpoint, null)
        .subscribe(data => resolve(data), error => resolve(null));
    });
  }

}
