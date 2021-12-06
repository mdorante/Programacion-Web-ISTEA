import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private apiUrl = 'https://rickandmortyapi.com/api'

  constructor(private http: HttpClient) { }

  getEpisodes() {
    return this.http.get(this.apiUrl + '/episode')
  }

  getCharacters() {
    return this.http.get(this.apiUrl + '/character')
  }
}
