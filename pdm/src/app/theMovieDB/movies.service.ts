import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private chave = "7b0f36e30364c4c0b62038fbd56d67a7";
  private caminhoPadrao = "https://api.themoviedb.org/3/";

  constructor(public http: HttpClient) { }

  public getExibicaoNoMomento(page=1, language="eng"){
    let fil= `${this.caminhoPadrao}movie/now_playing?page=${page}&language=${language}&api_key=${this.chave}`;
    console.log(fil);
    return this.http.get(fil);
  }

  public getPopularMovies(page=1, language="eng"){
    let filmes= `${this.caminhoPadrao}movie/popular?page=${page}&language=${language}&api_key=${this.chave}`;
    console.log(filmes);
    return this.http.get(filmes);
  }
}
