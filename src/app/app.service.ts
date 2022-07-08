import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BreweryService {
  constructor(private http: HttpClient) {}

  getBreweries(page: number) {
    return this.http.get(
      `https://rickandmortyapi.com/api/character?page=${page}&per_page=20`
    );
  }
}
