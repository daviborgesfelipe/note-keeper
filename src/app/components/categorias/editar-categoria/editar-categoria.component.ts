import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/categoria';
import { Nota } from 'src/app/models/notas';
import { CategoriaService } from 'src/app/services/categoria.service';
import { NotaService } from 'src/app/services/nota.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit{
  categoria: Categoria;
  categorias: Categoria[];
  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private router: Router,
    private toastService: ToastrService

    ){
    this.categorias = [];
    this.categoria = new Nota('','','dark',0);

    }
  ngOnInit(): void {
    let id: number = parseInt(this.route.snapshot.paramMap.get('id') as string);
    this.categoriaService.selecionarTodos().subscribe(_categorias => this.categorias = _categorias);
    
    this.categoriaService.selecionarPorId(id).subscribe((nota: Categoria) => this.categoria = nota);
  }
  editarCategoria(){
    this.categoriaService.editar(this.categoria).subscribe((categoria: Categoria) => {
      this.toastService.success(`Categoria ${categoria.titulo} EDITADA com sucesso`, 'Sucesso')
      this.router.navigate(['/categorias', 'listar'])
    });
  }
}
