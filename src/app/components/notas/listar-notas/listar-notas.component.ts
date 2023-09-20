import { Component, OnInit } from '@angular/core';
import { Nota } from '../../../models/notas';
import { NotaService } from '../../../services/nota.service';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css']
})

export class ListarNotasComponent implements OnInit{

  notas: Nota[] = [];
  categorias: Categoria[] = [];

  categoria: Categoria;

  constructor(
      private notaService: NotaService, 
      private categoriaService: CategoriaService
    ) {
    this.categoria = new Categoria('')
  }
    
  ngOnInit(): void {
    this.notaService.selecionarTodasNotasCategoria().subscribe(_notas =>
      this.notas = _notas
    );
    this.categoriaService.selecionarCategoriaComNotas().subscribe(_categoria => 
      this.categorias = _categoria
    );
  }

  filtrarNotasPorCategoria(categoria: Categoria | null){
    if(categoria == null){
      this.selecionarTodasNotas();
      return
    }
    this.selecionarNotasPorCategoria(categoria);
  }

  selecionarNotasPorCategoria(categoria: Categoria) {
    this.notaService.selecionarTodosNotasPorCategoriaId(categoria).subscribe((notas: Nota[]) => {
      this.notas = notas
    })
  }

  selecionarTodasNotas() {
    this.notaService.selecionarTodasNotasCategoria().subscribe(_notas =>
      this.notas = _notas
    );
  }
}
