import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Nota } from '../../../models/notas';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-nota',
  templateUrl: './card-nota.component.html',
  styleUrls: ['./card-nota.component.css']
})
export class CardNotaComponent{
  @Input() nota: Nota = {
    id: 0,
    titulo: 'Analise',
    conteudo: 'Analisando',
    tema: 'dark',
    categoriaId: 2,
    categoria: {
      titulo: 'Teste',
      id: 12
    },
    arquivada: false
  };
  
  @Input() categoria: Categoria = {
    id: 0,
    titulo: "Teste"
  }
  

  @Output() onArquivarClicado: EventEmitter<Nota>;

  constructor(private categoriaService: CategoriaService){
    this.onArquivarClicado = new EventEmitter();
  }

  arquivarNota(nota: Nota){
    this.onArquivarClicado.emit(nota);
  }
}
