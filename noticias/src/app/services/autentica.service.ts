import { Injectable } from "@angular/core";

@Injectable(
  {
    providedIn: 'root'
  }
)

export class AutenticaService
{
  private Autenticado : boolean = false;

  public DefineToken( token: string )
  {
    debugger
    sessionStorage.setItem('token', token);
  }

  public ObterToken()
  {
    sessionStorage.getItem('token');
  }

  public LimparToken()
  {
    sessionStorage.removeItem('token');
  }
}
