import { Component, Input, OnInit } from '@angular/core';
import { Nota } from '../../../models/notas';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-nota',
  templateUrl: './card-nota.component.html',
  styleUrls: ['./card-nota.component.css']
})
export class CardNotaComponent implements OnInit{
  @Input() nota: Nota = {
    id: 0,
    titulo: 'Analise',
    conteudo: 'Analisando',
    tema: 'dark',
    categoriaId: 2,
    categoria: {
      titulo: 'Teste',
      id: 12
    }
  };
  
  @Input() categoria: Categoria = {
    id: 0,
    titulo: "Teste"
  }
  
  constructor(private categoriaService: CategoriaService){

  }
    
  ngOnInit(): void {
    this.categoriaService.selecionarPorId(this.nota.categoriaId).subscribe((x: Categoria) => this.categoria = x)
  }
}
