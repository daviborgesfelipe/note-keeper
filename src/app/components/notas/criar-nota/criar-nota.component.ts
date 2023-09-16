import { Component, Input } from "@angular/core";
import { Nota } from "../../../models/notas";
import { NotaService } from "../../../services/nota.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from "src/app/services/categoria.service";
import { Categoria } from "src/app/models/categoria";

@Component({
  selector: 'app-criar-nota',
  templateUrl: './criar-nota.component.html',
  styleUrls: ['./criar-nota.component.css']
})

export class CriarNotaComponent {
  nota: Nota;
  @Input() categorias: Categoria[] = [];


  constructor(
    private notaService: NotaService,
    private categoriaService: CategoriaService,
    private router: Router,
    private toastService: ToastrService
    ) {
    this.nota = new Nota(
      '',
      '',
      'dark',
      0
    );
  }

  criarNota(){
    this.notaService.criar(this.nota).subscribe((nota) => {
      this.toastService.success(
        `Nota ${nota.titulo} CRIADA com sucesso`,
        'Sucesso'
      )

      this.router.navigate(['/notas', 'listar'])
    })
  }
}