export class Nota {
  id?: number;
  titulo: string;
  conteudo: string;
  tema: Tema;


  constructor( 
    titulo: string,
    conteudo: string,
    tema: Tema,
    id?: number
  ) {
    this.titulo = titulo;
    this.conteudo = conteudo;
    this.tema = tema; 
    this.id = id;    
  }
}

type Tema = 'primary' | 'info' | 'warning' | 'danger' | 'dark'