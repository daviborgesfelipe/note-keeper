import { Component, OnInit } from '@angular/core';
import { Nota } from '../../../models/notas';
import { NotaService } from '../../../services/nota.service';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css']
})
export class ListarNotasComponent implements OnInit{
  notas: Nota[] = [];
  categorias: Categoria[] = []

  constructor(private notaService: NotaService) {
    console.log("======>", this.notas)
  }
  
  ngOnInit(): void {
    this.notaService.selecionarTodos().subscribe(_notas => this.notas = _notas);
  }
}
