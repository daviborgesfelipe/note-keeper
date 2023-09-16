import { Component, Input, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})

export class ListarCategoriaComponent implements OnInit{
  @Input() categoria: Categoria = {
    id: 0,
    titulo: 'Analise'
  };

  @Input() categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) {

  }
  

  ngOnInit(): void {
    this.categoriaService.selecionarTodos().subscribe(_notas => this.categorias = _notas);
  }
}
