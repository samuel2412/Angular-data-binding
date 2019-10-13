import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent{
nome: string= 'aaa';

  pessoa: any = {
    nome: 'blabla',
    idade: 20
  }

  constructor() { }

 

}
