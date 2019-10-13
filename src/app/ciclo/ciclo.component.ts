import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges,OnInit,DoCheck,
AfterContentInit,AfterContentChecked,AfterViewInit,AfterContentChecked,OnDestroy {

  @Input() valorInicial=10;


  ngOnInit(): void {
   this.log('ngOnInit');
  }
  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }
  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
  }
  ngDoCheck(): void {
    this.log('ngDoCheck');
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.log('ngOnChenges');
  }

  constructor() { }


  log(mensagem:string){
    console.log(mensagem);
  }

}
