import { Injectable } from "@angular/core";
import { Nota } from "./notas";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class NotaService {
  private API_URL = 'http://localhost:3000/notas/'
  private notas: Nota[] = [];

  constructor(private http: HttpClient) {
  }


  excluir(nota: Nota) {
    return this.http.delete<Nota>(this.API_URL + nota.id);
  }

  editar(nota: Nota){
    return this.http.put<Nota>(this.API_URL + nota.id, nota);
  }

  selecionarTodos() {
    return this.http.get<Nota[]>(this.API_URL);
  }  
  
  selecionarPorId(id: number) {
    return this.http.get<Nota>(this.API_URL + id)
  }

  criar(nota: Nota) {
    return this.http.post<Nota>(this.API_URL, nota)
  }
}