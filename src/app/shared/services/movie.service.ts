import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const API_URL ="http://www.omdbapi.com/?i=tt3896198&apikey=cac7a121";
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  getMoviesWithTitle(title:string){
    return this.http.get(`${API_URL}/?t=${title}`)
  }
}
