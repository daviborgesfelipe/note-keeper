import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Categoria } from "../models/categoria";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CategoriaService{
  private API_URL = 'http://localhost:3000/categorias/'
  private notas: Categoria[] = [];
  
  constructor(private http: HttpClient) {
    
  }

  criar(nota: Categoria) {
    return this.http.post<Categoria>(this.API_URL, nota)
  }

  selecionarTodos(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.API_URL);
  }  
}