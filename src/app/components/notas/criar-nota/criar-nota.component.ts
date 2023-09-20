import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
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

export class CriarNotaComponent implements OnInit{
  // @Output() notaCriada = new EventEmitter<Nota>();
  nota: Nota;
  categoria: Categoria;
  notas: Nota[] = [];
  categorias: Categoria[] = []; 

  constructor(
      private notaService: NotaService,
      private categoriaService: CategoriaService,
      private router: Router,
      private toastService: ToastrService
    ) {
    this.categoria = new Categoria('')
    this.nota = new Nota('','','dark',0, this.categoria);
  }

  ngOnInit(): void {
    this.categoriaService.selecionarTodos().subscribe(_categorias => this.categorias = _categorias);
  }

  criarNota(){
    this.notaService.criar(this.nota).subscribe((nota) => {
      this.toastService.success(
        `Nota ${nota.titulo} CRIADA com sucesso`,
        'Sucesso'
      )
      // this.notaCriada.emit(nota);
      this.router.navigate(['/notas', 'listar'])
    })
  }
}