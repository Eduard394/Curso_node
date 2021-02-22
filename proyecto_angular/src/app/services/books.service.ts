import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private  pathApi = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.pathApi}/books`)
  }

  getBook(id: string) {
    return this.http.get(`${this.pathApi}/books/${id}`)
  }  

}
