import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AlunosComponent} from "./alunos.component";
import {AlunosDetalheComponent} from "./alunos-detalhe/alunos-detalhe.component";
import {AlunosFormComponent} from "./alunos-form/alunos-form.component";


const alunosRoutes: Routes = [
  {
    path: 'alunos', component: AlunosComponent, children: [  // children indica que são rotas filhas
      {path: 'novo', component: AlunosFormComponent},        // esse tipo de declaração é util para se fazer mestre-detalhe
      {path: ':id', component: AlunosDetalheComponent},
      {path: ':id/editar', component: AlunosFormComponent}
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]

})
export class AlunosRoutingModule {

}
