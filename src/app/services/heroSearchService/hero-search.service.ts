import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Details }           from '../../types/details/details';

@Injectable()
export class HeroSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Details[]> {
    return this.http
               .get(`app/heroes/?name=${term}`)
               .map(response => response.json().data as Details[]);
  }
}
