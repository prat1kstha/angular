import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http: HttpClient) {
  }

  getDog() {
    return this.http.get('https://dog.ceo/api/breeds/image/random');
  }

}
