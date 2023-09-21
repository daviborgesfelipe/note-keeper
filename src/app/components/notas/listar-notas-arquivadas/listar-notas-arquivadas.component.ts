import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/categoria';
import { Nota } from 'src/app/models/notas';
import { CategoriaService } from 'src/app/services/categoria.service';
import { NotaService } from 'src/app/services/nota.service';

@Component({
  selector: 'app-listar-notas-arquivadas',
  templateUrl: './listar-notas-arquivadas.component.html',
  styleUrls: ['./listar-notas-arquivadas.component.css']
})
export class ListarNotasArquivadasComponent {
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
    this.notaService.selecionarTodosArquivadas().subscribe(_notas =>
      this.notas = _notas
    );
    this.categoriaService.selecionarCategoriaComNotas().subscribe(_categoria => 
      this.categorias = _categoria
    );
  }

  reativarNota(nota: Nota) {
    nota.arquivada = false;

    this.notaService.editar(nota).subscribe((nota: Nota) => {
      this.toastService.success(`Nota ${nota.titulo} reativada com sucesso!`);

      this.notaService
        .selecionarTodosArquivadas()
        .subscribe((notas: Nota[]) => (this.notas = notas));
    });
  }

  filtrarNotasPorCategoria(categoria: Categoria | null){
    if(categoria == null){
      this.selecionarTodasNotas();
      return
    }
    this.selecionarNotasPorCategoria(categoria);
  }

  selecionarNotasPorCategoria(categoria: Categoria) {
    this.notaService.selecionarTodosNotasArquivadasPorCategoriaId(categoria).subscribe((notas: Nota[]) => {
      this.notas = notas
    })
  }

  selecionarTodasNotas() {
    this.notaService.selecionarTodosArquivadas().subscribe(_notas =>
      this.notas = _notas
    );
  }
}
