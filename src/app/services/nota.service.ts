import { Injectable } from "@angular/core";
import { Nota } from "../models/notas";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Categoria } from "../models/categoria";

@Injectable({
  providedIn: 'root'
})

export class NotaService {
  private API_URL = 'http://localhost:3000/notas/'
  private notas: Nota[] = [];

  constructor(private http: HttpClient) {
  }
  
  criar(nota: Nota): Observable<Nota> {
    return this.http.post<Nota>(this.API_URL, nota)
  }
  
  editar(nota: Nota): Observable<Nota> {
    return this.http.put<Nota>(this.API_URL + nota.id, nota);
  }
  
  selecionarTodos(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.API_URL);
  }  

  selecionarTodosComCategoria(): Observable<Nota[]> {
    const URL = 'http://localhost:3000/notas?_expand=categoria'
    return this.http.get<Nota[]>(URL);
  } 
  
  selecionarPorId(id: number): Observable<Nota> {
    return this.http.get<Nota>(this.API_URL + id)
  }

  excluir(nota: Nota) {
    return this.http.delete<Nota>(this.API_URL + nota.id);
  }

  public selecionarPorCategoria(categoria: Categoria) {
    const URL = 'http://localhost:3000/notas?_expand=categoria&&categoriaId=' + categoria.id ?? 0;
    return this.http.get<Nota[]>(URL);
  }
}