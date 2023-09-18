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

  filtroCategoria: Categoria;
  nota: Nota;

  constructor(
      private notaService: NotaService, 
      private categoriaService: CategoriaService
    ) {
    this.filtroCategoria = new Categoria('')
    this.nota = new Nota('','','dark',0)
  }
    
  ngOnInit(): void {
    this.notaService.selecionarTodos().subscribe(_notas =>
      this.notas = _notas
    );
    this.categoriaService.selecionarTodos().subscribe(_categoria => 
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
    this.notaService.selecionarTodosComCategoria(categoria).subscribe((notas: Nota[]) => {
      this.notas = notas
    })
  }

  selecionarTodasNotas() {
    this.notaService.selecionarTodos().subscribe(_notas =>
      this.notas = _notas
    );
  }

  onFiltroSelecionado(categoria: Categoria) {
    this.filtroCategoria = categoria
    this.categoriaService.selecionarComCategoria(categoria).subscribe(x => this.categorias == x)
  }
}
