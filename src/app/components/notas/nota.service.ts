import { Injectable } from "@angular/core";
import { Nota } from "./notas";

@Injectable({
  providedIn: 'root'
})

export class NotaService {


  notas: Nota[] = [
    {
      id: 0,
      titulo: 'Analise',
      conteudo: 'Analisando',
      tema: 'dark',
    },
    {
      id: 1,
      titulo: 'Pronto para desenvolver',
      conteudo: 'Abstraido pronto para protitipar',
      tema: 'warning',
    },
    {
      id: 2,
      titulo: 'Desenvolvendo',
      conteudo: 'Em desenvolvimento, criando os primeiros prototipos',
      tema: 'primary',
    },
  ];

  selecionarTodos(): Nota[] {
    return this.notas
  }

  criar(nota: Nota) {
    nota.id = this.notas.length;

    this.notas.push(nota)
  }
}