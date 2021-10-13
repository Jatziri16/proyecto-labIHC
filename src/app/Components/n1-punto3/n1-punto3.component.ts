import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-n1-punto3',
  templateUrl: './n1-punto3.component.html',
  styleUrls: ['./n1-punto3.component.css']
})
export class N1Punto3Component implements OnInit 
{
  showTeoria: boolean = true;
  showEx1: boolean = false;
  showEx2: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  // Función que controla si ya puede ver el primer ejercicio después de ver la teoría
  controlEjercicio1()
  {
    this.showTeoria = false;
    this.showEx1 = true;
    this.showEx2 = false;
  }

  // Checa las respuestas del primer ejercicio, de ser correctas se mostrará el ejercicio 2
  checkResp1()
  {
    this.showTeoria = false;
    this.showEx1 = false;
    this.showEx2 = true;
  }
}
