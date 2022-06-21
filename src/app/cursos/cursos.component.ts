import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[] | undefined;
  pagina: number | undefined;
  inscricao: Subscription | undefined;

  constructor(private cursosService: CursosService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    )
  }

  ngOnDestroy(){
    this.inscricao?.unsubscribe();
  }

  proximaPagina() {
    // @ts-ignore
    //this.pagina++;
    // @ts-ignore
    this.router.navigate(['/cursos'],{queryParams: {'pagina':++this.pagina}});
    console.log(this.pagina);
  }
}
