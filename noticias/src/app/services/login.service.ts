import { Injectable } from "@angular/core";
import { environment } from "../enviroments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable(
  {
    providedIn: "root"
  }
)

export class LoginService
{
  constructor(private httpClient: HttpClient)
  {
  }
  private readonly baseURL = environment["endPoint"];

  async LoginUsuario(objeto: any) {
    debugger

    // Após pesquisa, encontrei a solução abaixo para executar os métodos da API, no Angular 8 e superior
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const response = await this.httpClient.post(`${this.baseURL}api/CriarTokenIdentity/`, objeto, { headers });

    return response;
  }
}


