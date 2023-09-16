import { Component, Input } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-tabela-categoria',
  templateUrl: './tabela-categoria.component.html',
  styleUrls: ['./tabela-categoria.component.css']
})
export class TabelaCategoriaComponent {
  @Input() categorias: Categoria[] = []
}
