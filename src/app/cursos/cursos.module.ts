/*
import {FormsModule, NgModel} from "@angular/forms";
import {CursosComponent} from "./cursos.component";
import {CursosService} from "./cursos.service";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CursoDetalheComponent} from "./curso-detalhe/curso-detalhe.component";
import {CursoNaoEncontradoComponent} from "./curso-nao-encontrado/curso-nao-encontrado.component";


@NgModel({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
],
  providers: [
    CursosService
  ],
})
*/

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CursosComponent} from "./cursos.component";
import {CursoDetalheComponent} from "./curso-detalhe/curso-detalhe.component";
import {CursoNaoEncontradoComponent} from "./curso-nao-encontrado/curso-nao-encontrado.component";
import {CursosService} from "./cursos.service";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent


  ],
  providers: [
    CursosService
  ]
})
export class CursosModule {}
