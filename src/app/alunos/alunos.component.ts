import { Component, OnInit } from '@angular/core';
import {AlunosService} from "./alunos.service";

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  protected alunos: any[] = [];
  // injeção de depêndencia para que os outros modulos de alunos
  // possam utilizar as funcionalidades implementadas no AlunosSerice
  constructor(private alunosService: AlunosService) {

  }

  ngOnInit(): void {
    this.alunos = this.alunosService.getAlunos();
  }

}
