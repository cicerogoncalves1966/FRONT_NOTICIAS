import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Interceptor } from './interceptor/interceptor';
import { NoticiasComponent } from './pages/noticias/noticias.component';

const serviceAutentica = [Interceptor]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    NoticiasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NoticiasComponent
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()), // Usado provideHttpCliente, porque HttpClientModule está obsoleto/depeciado
    serviceAutentica,
    {provide : HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
