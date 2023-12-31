import { Categoria } from "./categoria";

export class Nota {
  id?: number;
  titulo: string;
  conteudo: string;
  tema: Tema;
  categoriaId: number;
  categoria: Categoria
  arquivada: boolean

  constructor( 
    titulo: string,
    conteudo: string,
    tema: Tema,
    categoriaId: number,
    categoria: Categoria,
    id?: number
  ) {
    this.titulo = titulo;
    this.conteudo = conteudo;
    this.tema = tema; 
    this.categoriaId = categoriaId 
    this.id = id;   
    this.categoria = categoria
    this.arquivada = false
  }
}

type Tema = 'primary' | 'info' | 'warning' | 'danger' | 'dark'