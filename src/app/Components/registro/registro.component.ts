import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit 
{
  datosRegistro: FormGroup;
  nombre!: string;
  apellido!: string;
  correo!: string;
  usuario!: string;
  contra1: string = "";
  contra2!: string;

  constructor(private fb:FormBuilder,) 
  { 
    this.datosRegistro = this.fb.group
    ({
      name: ['', [Validators.required, Validators.pattern("^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$")]],
      lastName: ['', [Validators.required, Validators.pattern("^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$")]],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._-]*$")]],
      psw1: ['', [Validators.required, Validators.pattern("^[a-zA-záéíóúÁÉÍÓÚñÑ0-9&#$%()=¿?¡!._-]*$")]],
      psw2: ['', [Validators.required, Validators.pattern("^[a-zA-záéíóúÁÉÍÓÚñÑ0-9&#$%()=¿?¡!._-]*$")]],
    });
  }

  ngOnInit(): void {
  }

  registrarUser()
  {
    this.nombre = this.datosRegistro.value.name;
    this.apellido = this.datosRegistro.value.lastName;
    this.correo = this.datosRegistro.value.email;
    this.usuario = this.datosRegistro.value.userName;
    this.contra1 = this.datosRegistro.value.psw1;
    this.contra2 = this.datosRegistro.value.psw2;
    console.log("Nombre: " + this.nombre);
    console.log("Apellido: " + this.apellido);
    console.log("Correo: " + this.correo);
    console.log("Usuario: " +this.usuario);
    console.log("Contra1: " + this.contra1);
    console.log("Contra2: " + this.contra2);
  }

}
