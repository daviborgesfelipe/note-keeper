import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { NotaService } from 'src/app/services/nota.service';

@Component({
  selector: 'app-criar-categoria',
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['./criar-categoria.component.css']
})
export class CriarCategoriaComponent {
  categoria : Categoria;

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private toastService: ToastrService
    ) {
    this.categoria = new Categoria(
      ''
    );
  }
  criarCategoria(){
    this.categoriaService.criar(this.categoria).subscribe((_categoria) => {
      this.toastService.success(
        `Nota ${this.categoria.titulo} CRIADA com sucesso`,
        'Sucesso'
      )

      this.router.navigate(['/categorias', 'listar'])
    })
  }
}
