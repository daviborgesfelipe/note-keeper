import { Component, OnInit } from '@angular/core';
import { Nota } from '../notas';
import { NotaService } from '../nota.service';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css']
})
export class ListarNotasComponent implements OnInit{
  notas: Nota[] = [];

  constructor(private notaService: NotaService) {
  }
  
  ngOnInit(): void {
    this.notaService.selecionarTodos().subscribe(_notas => this.notas = _notas);
  }
}
