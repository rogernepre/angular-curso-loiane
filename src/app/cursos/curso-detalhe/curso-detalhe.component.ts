import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {CursosService} from "../cursos.service";

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number | undefined;
  inscricao: Subscription | undefined;
  curso: any;

  constructor(private route: ActivatedRoute,
              private cursosService: CursosService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(  // me inscrevo para ver as mudanças do parâmetro
      (params: any) => {
        this.id = params['id'];

        this.curso = this.cursosService.getCurso(params['id']);

        if (this.curso == null) {
          this.router.navigate(['/cursoNaoEncontrado'])

        }
      }
    )
  }

}
