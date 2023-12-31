import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-excluir-categoria',
  templateUrl: './excluir-categoria.component.html',
  styleUrls: ['./excluir-categoria.component.css']
})

export class ExcluirCategoriaComponent implements OnInit{
  categoria: Categoria;

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService
  ){
  this.categoria = new Categoria('', 0)
  }


  ngOnInit(): void {
    let id: number = parseInt(this.route.snapshot.paramMap.get('id') as string);
    
    this.categoriaService.selecionarPorId(id).subscribe((nota: Categoria) => this.categoria = nota);
  }
  
  excluirCategoria(){
    this.categoriaService.excluir(this.categoria).subscribe(() => {
      this.toastService.success(`Categoria EXCLUIDA com sucesso`, 'Sucesso')
      this.router.navigate(['/categorias', 'listar'])
    })
  }
}
