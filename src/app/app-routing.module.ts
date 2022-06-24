import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {CursosComponent} from "./cursos/cursos.component";
import {CursoDetalheComponent} from "./cursos/curso-detalhe/curso-detalhe.component";
import {CursoNaoEncontradoComponent} from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";
import {AlunosComponent} from "./alunos/alunos.component";


const routes: Routes = [
  {path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m =>
    m.CursosModule) },

  //{path: 'alunos', component: AlunosComponent},

  {path: 'login', component: LoginComponent},

  {path: '', component: HomeComponent}
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
