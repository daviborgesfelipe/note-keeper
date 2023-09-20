import { Component, OnInit } from '@angular/core';
import { NotaService } from '../../../services/nota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Nota } from '../../../models/notas';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})

export class EditarNotaComponent implements OnInit{
  nota: Nota;
  notas: Nota[] = [];
  categorias: Categoria[] = []; 
  
  constructor(
      private notaService: NotaService,
      private route: ActivatedRoute,
      private categoriaService: CategoriaService,
      private router: Router,
      private toastService: ToastrService
    ){
    this.nota = new Nota('','','dark',0, new Categoria(''));
    }

    ngOnInit(): void {
      let id: number = parseInt(this.route.snapshot.paramMap.get('id') as string);
      this.categoriaService.selecionarTodos().subscribe(_categorias => {
        this.categorias = _categorias
      });
      this.notaService.selecionarNotaPorId(id).subscribe((nota: Nota) => this.nota = nota);
    }

    editarNota(){
      this.notaService.editar(this.nota).subscribe((nota: Nota) => {
        this.toastService.success(`Nota ${nota.titulo} EDITADA com sucesso`, 'Sucesso')
        this.router.navigate(['/notas', 'listar'])
      });
    }
}
