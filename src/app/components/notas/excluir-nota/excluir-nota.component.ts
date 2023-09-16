import { Component, OnInit } from '@angular/core';
import { Nota } from '../../../models/notas';
import { NotaService } from '../../../services/nota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  this.nota = new Nota('','','dark',0);
  }
  ngOnInit(): void {
    let id: number = parseInt(this.route.snapshot.paramMap.get('id') as string);
    
    this.notaService.selecionarPorId(id).subscribe((nota: Nota) => this.nota = nota);
  }
  
  excluirNota(){
    this.notaService.excluir(this.nota).subscribe((nota: Nota) => {
      this.toastService.success(`Nota ${nota.titulo} EXCLUIDA com sucesso`, 'Sucesso')
      this.router.navigate(['/notas', 'listar'])
    })
  }
}
