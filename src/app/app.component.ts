import { Component } from '@angular/core';

//decorator 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'note-keeper';
  saudacao: string = "Hello World!";

  valor: string = ""

  mostarValor(){
    return alert(this.valor)
  }
}
