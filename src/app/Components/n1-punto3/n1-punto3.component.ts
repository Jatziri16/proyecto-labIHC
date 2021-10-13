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
  constructor() { }

  ngOnInit(): void {
  }
  controlEjercicio1()
  {
    this.showTeoria = false;
    this.showEx1 = true;
  }
}
