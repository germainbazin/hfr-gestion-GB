import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Artiste} from './artiste';
import {ArtisteComponent} from './artiste/artiste.component';

@Injectable()
export class HttpService {
private apiUrl = 'api/url';

  constructor(private httpClient: HttpClient) { }
getPlayer(): Observable<Artiste>{
    return of(ArtisteComponent);
}

}
