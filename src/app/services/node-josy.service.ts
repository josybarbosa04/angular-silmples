import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../classes/pessoa';


@Injectable({
  providedIn: 'root'
})
export class NodeJosyService {
  //url = "https://nodejosy.herokuapp.com/";
  url = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { }
  
  obterTexto(): Observable<string> {
    return this.httpClient.get<string>(this.url);
  }
  
  obterTextoJosemires(): Observable<string> {
    return this.httpClient.get<string>(this.url + 'josemires');
  }

  obterTextoPost(): Observable<string> {  
    var pessoa = new Pessoa();
    pessoa.nome = "Josemires";
    pessoa.sobrenome = "da Silva";
    pessoa.idade = 21;
    pessoa.altura = 1.60;
    pessoa.filiacao.mae = "Maria";
    pessoa.filiacao.pai = "João";
    return this.httpClient.post<string>(this.url + 'josemires', pessoa);
  }
  
}
