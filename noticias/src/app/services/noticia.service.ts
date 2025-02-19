import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../enviroments/environment";

@Injectable(
  {
    providedIn: "root"
  }
)

export class NoticiaService
{
  constructor(private httpClient: HttpClient)
  {
  }
  private readonly baseURL = environment["endPoint"];

  async ListarNoticias()
  {
    // Após pesquisa, encontrei a solução abaixo para executar os métodos da API, no Angular 8 e superior
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const response = await this.httpClient.post(`${this.baseURL}api/CriarTokenIdentity/`, null, { headers });
    return response;

    // A maneira abaixo, usada durante a aula só funciona no Angular versão menor que 6.
    // return this.httpClient.post<any>
    //         (`$(this.baseURL)/ListarNoticias/`, null)
  }
}
