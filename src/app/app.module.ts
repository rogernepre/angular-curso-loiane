import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {CursosModule} from "./cursos/cursos.module";
/*
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { AlunosComponent } from './alunos/alunos.component';
*/
import {AlunosModule} from "./alunos/alunos.module";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    /*
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
    AlunosComponent
    */
  ],
  imports: [
    AlunosModule,
    CursosModule,
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
