import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Categoria } from "../models/categoria";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class CategoriaService{
  private CATEGORIA_API_URL = `${ environment.API_URL }/api/categorias`
  private API_URL_CATEGORIA_EMBED_NOTAS = `${ environment.API_URL }/api/categorias?_embed=notas`

  constructor(private http: HttpClient) {
  }

  criar(categoria: Categoria) {
    return this.http.post<Categoria>(this.CATEGORIA_API_URL, categoria)
  }

  selecionarTodos(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.CATEGORIA_API_URL);
  }   
  
  selecionarComCategoria(categoria: Categoria): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.CATEGORIA_API_URL + categoria.id);
  }    
  
  selecionarCategoriaComNotas(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.API_URL_CATEGORIA_EMBED_NOTAS);
  }  

  selecionarPorId(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(this.CATEGORIA_API_URL + id)
  }

  excluir(categoria: Categoria) {
    return this.http.delete<Categoria>(this.CATEGORIA_API_URL + categoria.id);
  }

  editar(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(this.CATEGORIA_API_URL + categoria.id, categoria);
  }
}