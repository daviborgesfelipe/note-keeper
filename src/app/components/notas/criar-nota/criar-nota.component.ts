import { Component } from "@angular/core";
import { Nota } from "../notas";
import { NotaService } from "../nota.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-criar-nota',
  templateUrl: './criar-nota.component.html',
  styleUrls: ['./criar-nota.component.css']
})

export class CriarNotaComponent {
  nota: Nota;

  constructor(
    private notaService: NotaService,
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
      this.toastService.success(`Nota ${nota.titulo} CRIADA com sucesso`, 'Sucesso')
      this.router.navigate(['/notas', 'listar'])
    })
  }
}