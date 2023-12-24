import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const API_URL ="http://www.omdbapi.com/?apikey=cac7a121&";
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  getMoviesWithTitle(title:string, season?:number, episode?:number){
    return this.http.get(`${API_URL}t=${title}${season ? `&season=${season}` : ''}${episode ? `&episode=${episode}` : ''}`)
  }
}
