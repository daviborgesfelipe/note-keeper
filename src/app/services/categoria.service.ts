import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Categoria } from "../models/categoria";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CategoriaService{
  private API_URL = 'http://localhost:3000/categorias/'
  private categorias: Categoria[] = [];
  
  constructor(private http: HttpClient) {
  }

  criar(categoria: Categoria) {
    return this.http.post<Categoria>(this.API_URL, categoria)
  }

  selecionarTodos(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.API_URL);
  }   
  
  selecionarComCategoria(categoria: Categoria): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.API_URL + categoria.id);
  }    
  
  selecionarCategoriaComNotas(categoria: Categoria): Observable<Categoria[]> {
    const URL = 'http://localhost:3000/categorias?_embed=notas'
    return this.http.get<Categoria[]>(URL);
  }  

  selecionarPorId(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(this.API_URL + id)
  }

  excluir(categoria: Categoria) {
    return this.http.delete<Categoria>(this.API_URL + categoria.id);
  }

  editar(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(this.API_URL + categoria.id, categoria);
  }
}