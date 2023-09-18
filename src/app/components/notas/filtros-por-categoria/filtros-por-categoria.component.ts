import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-filtros-por-categoria',
  templateUrl: './filtros-por-categoria.component.html',
  styleUrls: ['./filtros-por-categoria.component.css']
})
export class FiltrosPorCategoriaComponent implements OnInit{
  @Input({required: true}) categorias: Categoria[];

  @Output() onFiltroSelecionado: EventEmitter<Categoria>;

  constructor(private servicoCategoria: CategoriaService){
    this.onFiltroSelecionado = new EventEmitter();
    this.categorias = []
  }
  ngOnInit(): void {
    this.servicoCategoria.selecionarTodos().subscribe(_categorias => this.categorias == _categorias)
  }

  selecionarTodas(){
    this.onFiltroSelecionado.emit();
  }

  selecionarComFiltro(categoria: Categoria){
    this.onFiltroSelecionado.emit(categoria)
  }
}
