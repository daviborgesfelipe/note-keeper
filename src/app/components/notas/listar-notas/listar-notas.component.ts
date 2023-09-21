import { Component, OnInit } from '@angular/core';
import { Nota } from '../../../models/notas';
import { NotaService } from '../../../services/nota.service';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ToastrService } from 'ngx-toastr';

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
      private categoriaService: CategoriaService,
      private toastService: ToastrService
    ) {
    this.categoria = new Categoria('')
  }
    
  ngOnInit(): void {
    this.notaService.selecionarTodos().subscribe(_notas =>
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

  arquivarNota(nota: Nota) {
    nota.arquivada = true;

    this.notaService.editar(nota).subscribe((nota: Nota) => {
      this.toastService.success(`Nota ${nota.titulo} arquivada com sucesso!`);

      this.notaService
        .selecionarTodos()
        .subscribe((notas: Nota[]) => (this.notas = notas));
    });
  }
}
