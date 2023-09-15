import { Component, OnInit } from '@angular/core';
import { NotaService } from '../nota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Nota } from '../notas';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit{
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

    editarNota(){
      this.notaService.editar(this.nota).subscribe((nota: Nota) => {
        this.toastService.success(`Nota ${nota.titulo} EDITADA com sucesso`, 'Sucesso')
        this.router.navigate(['/notas', 'listar'])
      });
    }
}
