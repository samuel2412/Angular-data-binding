import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './imput-property.component.html',
  styleUrls: ['./imput-property.component.css']
})
export class ImputPropertyComponent implements OnInit {

  @Input('nome') nomeCurso: string = ''

  constructor() { }

  ngOnInit() {
  }

}
