import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-n1-punto2',
  templateUrl: './n1-punto2.component.html',
  styleUrls: ['./n1-punto2.component.css']
})
export class N1Punto2Component implements OnInit 
{
  ejercicio1: FormGroup;
  showTeoria: boolean = true;
  showEx1: boolean = false;
  showEx2: boolean = false;

  constructor(private fb:FormBuilder,
              private toastr: ToastrService,) 
  {
    this.ejercicio1 = this.fb.group({
      User: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
      Password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
    });
  }

  ngOnInit(): void {
  }

  controlEjercicio1()
  {
    this.showTeoria = false;
    this.showEx1 = true;
    this.showEx2 = false;
  }

  // Checa las respuestas del primer ejercicio, de ser correctas se mostrará el ejercicio 2
  checkResp1()
  {
    let todasCorrectas, checar;

    this.showTeoria = false;
    this.showEx1 = false;
    this.showEx2 = true;
    if(todasCorrectas)
    {
      // 
    }
    else
    {
      // 
    }
  }

  // Checa las respuestas del primer ejercicio, de ser correctas se mostrará el ejercicio 2
  checkResp2()
  {
    this.showTeoria = false;
    this.showEx1 = false;
    this.showEx2 = true;
  }

}