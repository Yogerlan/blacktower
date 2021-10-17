// Angular imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TorreService {

  constructor(private http: HttpClient) { }

  searchPeople(query = '') {
    return new Promise(resolve => {
      let endpoint = `https://search.torre.co/people/_search/${query}`;
      this.http.post(endpoint, null)
        .subscribe(data => resolve(data), error => resolve(null));
    });
  }

  searchJobs(query = '') {
    return new Promise(resolve => {
      const endpoint = `https://search.torre.co/opportunities/_search/${query}`;
      this.http.post(endpoint, null)
        .subscribe(data => resolve(data), error => resolve(null));
    });
  }

  getPerson(username: string) {
    return new Promise(resolve => {
      const endpoint = `https://torre.bio/api/bios/${username}`;
      this.http.get(endpoint)
        .subscribe(data => resolve(data), error => resolve(null));
    });
  }

  getJob(id: string) {
    return new Promise(resolve => {
      const endpoint = `https://torre.co/api/suite/opportunities/${id}`;
      this.http.get(endpoint)
        .subscribe(data => resolve(data), error => resolve(null));
    });
  }

}
