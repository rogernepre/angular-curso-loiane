import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  //private alunos: any[] = [
  //       {id: 1, nome: 'Aluno 01', email: 'aluno01@email.com'},
  //       {id: 2, nome: 'Aluno 02', email: 'aluno02@email.com'},
  //       {id: 3, nome: 'Aluno 03', email: 'aluno03@email.com'},
  //       {id: 4, nome: 'Aluno 04', email: 'aluno04@email.com'},
  //       {id: 5, nome: 'Aluno 05', email: 'aluno05@email.com'},
  //       {id: 6, nome: 'Aluno 06', email: 'aluno06@email.com'}
  //     ];

  getAlunos() {
    // return this.alunos;
    return [
      {id: 1, nome: 'Aluno 01', email: 'aluno01@email.com'},
      {id: 2, nome: 'Aluno 02', email: 'aluno02@email.com'},
      {id: 3, nome: 'Aluno 03', email: 'aluno03@email.com'},
      {id: 4, nome: 'Aluno 04', email: 'aluno04@email.com'},
      {id: 5, nome: 'Aluno 05', email: 'aluno05@email.com'},
      {id: 6, nome: 'Aluno 06', email: 'aluno06@email.com'}
    ];
  }

  getAluno(id: number) {
    let alunos = this.getAlunos();
    for (let i = 0; i < alunos.length; i++) {
      let aluno = alunos[i];
      if (aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }

  /*
  for(let i=0; i<this.alunos.length; i++){
    let aluno = this.alunos[i];
    if(aluno.id = id){
      console.log(aluno);
      return aluno
    }
  }
  return null;

   */


  constructor() {
  }
}
