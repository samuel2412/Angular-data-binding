import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  valor: number = 0;
  deletarCiclo: boolean = false;

  mudarValor(){
    this.valor = Math.floor(Math.random() * 10) + 1 ;
  }
  destruirCiclo(){
    this.deletarCiclo = true;
  }
}
