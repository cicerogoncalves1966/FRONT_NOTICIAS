import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../../models/LoginModel';
import { LoginService } from '../../services/login.service';
import { AutenticaService } from '../../services/autentica.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false,
})
export class LoginComponent implements OnInit {

  loginForm! : FormGroup;

  constructor( private formBuilder : FormBuilder,
               private router: Router, private loginService: LoginService,
               private autenticaService: AutenticaService ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required]],
      }
    )
  }

  async submitLogin()
  {
    debugger
    var dadosLogin = this.loginForm.getRawValue() as LoginModel;
    //const resposta = await this.loginService.LoginUsuario(dadosLogin);

    (await this.loginService.LoginUsuario(dadosLogin)).subscribe
        (
        token => {
          this.autenticaService.DefineToken(token.toString());
          this.router.navigate(["/noticias"]);
        },
        error => {
        })
  }
}
