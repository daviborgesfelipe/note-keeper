import { Component, OnInit } from '@angular/core';
import { Nota } from '../../../models/notas';
import { NotaService } from '../../../services/nota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/categoria';
@Component({
  selector: 'app-excluir-nota',
  templateUrl: './excluir-nota.component.html',
  styleUrls: ['./excluir-nota.component.css']
})
export class ExcluirNotaComponent implements OnInit{
  nota: Nota;
  constructor(
    private notaService: NotaService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService
  ){
  this.nota = new Nota('','','dark',0, new Categoria(''));
  }
  ngOnInit(): void {
    let id: number = parseInt(this.route.snapshot.paramMap.get('id') as string);
    
    this.notaService.selecionarNotaPorId(id).subscribe((nota: Nota) => this.nota = nota);
  }
  
  excluirNota(){
    this.notaService.excluir(this.nota).subscribe(() => {
      this.toastService.success(`Nota EXCLUIDA com sucesso`, 'Sucesso')
      this.router.navigate(['/notas', 'listar'])
    })
  }
}
