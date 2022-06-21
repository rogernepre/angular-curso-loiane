import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AlunosComponent} from "./alunos.component";
import {AlunosDetalheComponent} from "./alunos-detalhe/alunos-detalhe.component";
import {AlunosFormComponent} from "./alunos-form/alunos-form.component";
import {AlunosRoutingModule} from "./alunos.routing.module";

@NgModule({
  imports: [
    AlunosRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule
    ],
  exports: [

  ],
  declarations:[
    AlunosComponent,
    AlunosDetalheComponent,
    AlunosFormComponent
  ],
  providers: [

  ]

})
// @ts-ignore
export class AlunosModule{}
