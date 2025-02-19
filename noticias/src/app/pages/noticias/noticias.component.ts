import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiaService } from '../../services/noticia.service';

@Component({
  selector: 'app-noticias',
  standalone: false,
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})

export class NoticiasComponent implements OnInit {

  constructor(private noticiaService: NoticiaService, private router: Router) { }

  noticias!: any;

  ngOnInit(): void {
    this.ListarNoticias();
  }

  async ListarNoticias() {
  (await this.noticiaService.ListarNoticias())
      .subscribe(noticias => {
        this.noticias = noticias;
      },
        error => {
          this.router.navigate(["/login"]);
        } )
  }

}
