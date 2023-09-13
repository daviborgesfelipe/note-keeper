import { Component } from '@angular/core';
import { Nota } from '../notas';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css']
})
export class ListarNotasComponent {
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
}
