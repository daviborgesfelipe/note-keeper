import { Injectable } from "@angular/core";
import { Nota } from "../models/notas";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Categoria } from "../models/categoria";

@Injectable({
  providedIn: 'root'
})

export class NotaService {
  private NOTAS_API_URL = 'http://localhost:3000/notas/'
  private CATEGORIA_API_URL = 'http://localhost:3000/categorias/'
  private EXPAND_CATEGORIA = "?_expand=categoria"
  private EXPAND_CATEGORIA_CATEGORIAID = "&&categoriaId="
  private notas: Nota[] = [];

  constructor(private http: HttpClient) {
  }
  
  criar(nota: Nota): Observable<Nota> {
    return this.http.post<Nota>(this.NOTAS_API_URL, nota)
  }
  
  editar(nota: Nota): Observable<Nota> {
    return this.http.put<Nota>(this.NOTAS_API_URL + nota.id, nota);
  }
  
  excluir(nota: Nota) {
    return this.http.delete<Nota>(this.NOTAS_API_URL + nota.id);
  }
  
  selecionarTodos(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.NOTAS_API_URL);
  }  
  
  selecionarNotaPorId(id: number): Observable<Nota> {
    return this.http.get<Nota>(this.NOTAS_API_URL + id + this.EXPAND_CATEGORIA)
  }

  selecionarTodasNotasCategoria(): Observable<Nota[]>{
    return this.http.get<Nota[]>(this.NOTAS_API_URL + this.EXPAND_CATEGORIA)
  }
  
  selecionarTodosNotasPorCategoriaId(categoria: Categoria): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.NOTAS_API_URL + this.EXPAND_CATEGORIA + this.EXPAND_CATEGORIA_CATEGORIAID + categoria.id ?? 0);
  } 
}