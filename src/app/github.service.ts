import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username: string;
  private client_id = 'a62d81ded58444ae2a36';
  private client_secret = 'cfa1d540d65586bf3de628e650ccdc91dda6127f';

  constructor(private _http: Http) {
    console.log('Application ready...!');
    this.username = 'an0nh4x0r';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id
      + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

}
