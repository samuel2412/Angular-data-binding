import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com'
  urlImagem: string = 'https://safebooru.org//samples/2800/sample_d742cbf6f5af696e5202655b416878dc397d22cd.jpg?2915958'
  cursoAngular:boolean = true
  valorAtual: string = ''
  valorSalvo: string = '' 
  mouseOuver: boolean = false;
  nomeCurso: string = 'Angular'
  valorInicial: number = 10;

  onMudouValor(evento){
    console.log("data-binding.component " + evento.novoValor);
  }

  onMouseOuverOut(){
    this.mouseOuver = !this.mouseOuver;
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  getValor(){
    return 1
  }

  botaoClicado(){
    return alert("Botao Clicado!");
  }

  getCurtirCurso(){
    return true
  }

  constructor() { }

  ngOnInit() {
  }

}
