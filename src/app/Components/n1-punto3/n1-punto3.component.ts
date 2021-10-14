import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-n1-punto3',
  templateUrl: './n1-punto3.component.html',
  styleUrls: ['./n1-punto3.component.css']
})
export class N1Punto3Component implements OnInit 
{
  ejercicio1: FormGroup;
  ejercicio2: FormGroup;
  showTeoria: boolean = true;
  showEx1: boolean = false;
  showEx2: boolean = false;

  pregunta1!: string; pregunta2!: string; pregunta3!: string;
  pregunta4!: string; pregunta5!: string; pregunta6!: string; 
  pregunta7!: string; pregunta8!: string; pregunta9!: string;
  pregunta10!: string; pregunta1_1!: string;

  constructor(private fb:FormBuilder,
              private toastr: ToastrService,) 
  { 
    this.ejercicio1 = this.fb.group({
      pregunta1: ['', Validators.required],
      pregunta1_1: ['', Validators.required],
      pregunta2: ['', Validators.required],
      pregunta3: ['', Validators.required],
      pregunta4: ['', Validators.required],
      pregunta5: ['', Validators.required],
      pregunta6: ['', Validators.required],
      pregunta7: ['', Validators.required],
      pregunta8: ['', Validators.required],
      pregunta9: ['', Validators.required],
      pregunta10: ['', Validators.required],
    });

    this.ejercicio2 = this.fb.group({
      pregunta1: ['', Validators.required],
      pregunta2: ['', Validators.required],
      pregunta3: ['', Validators.required],
      pregunta4: ['', Validators.required],
      pregunta5: ['', Validators.required],
      pregunta6: ['', Validators.required],
      pregunta7: ['', Validators.required],
      pregunta8: ['', Validators.required],
      pregunta9: ['', Validators.required],
      pregunta10: ['', Validators.required],
    });
  }

  ngOnInit(): void 
  {
    // 
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
    let errores = "", buenas = 0;
    this.pregunta1 = this.ejercicio1.value.pregunta1;
    this.pregunta1_1 = this.ejercicio1.value.pregunta1_1;
    this.pregunta2 = this.ejercicio1.value.pregunta2;
    this.pregunta3 = this.ejercicio1.value.pregunta3;
    this.pregunta4 = this.ejercicio1.value.pregunta4;
    this.pregunta5 = this.ejercicio1.value.pregunta5;
    this.pregunta6 = this.ejercicio1.value.pregunta6;
    this.pregunta7 = this.ejercicio1.value.pregunta7;
    this.pregunta8 = this.ejercicio1.value.pregunta8;
    this.pregunta9 = this.ejercicio1.value.pregunta9;
    this.pregunta10 = this.ejercicio1.value.pregunta10;

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 1
    if(this.pregunta1 == "the")
    {
      buenas++;
    }
    else
    {
      errores = "pregunta 1, ";
    }
    if(this.pregunta1_1 == "the")
    {
      buenas++;
    }
    else
    {
      errores = "pregunta 1.1, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 2
    if(this.pregunta2 == "an")
    {
      buenas++;
    }
    else
    {
      errores = errores + "pregunta 2, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 3
    if(this.pregunta3 == "the")
    {
      buenas++;
    }
    else
    {
      errores = errores + "pregunta 3, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 4
    if(this.pregunta4 == "x")
    {
      buenas++;
    }
    else
    {
      errores = errores + "pregunta 4, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 5
    if(this.pregunta5 == "an")
    {
      buenas++;
    }
    else
    {
      errores = errores + "pregunta 5, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 6
    if(this.pregunta6 == "an")
    {
      buenas++;
    }
    else
    {
      errores = errores + "pregunta 6, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 7
    if(this.pregunta7 == "a")
    {
      buenas++;
    }
    else
    {
      errores = errores + "pregunta 7, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 8
    if(this.pregunta8 == "x")
    {
      buenas++;
    }
    else
    {
      errores = errores + "pregunta 8, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 9
    if(this.pregunta9 == "a")
    {
      buenas++;
    }
    else
    {
      errores = errores + "pregunta 9, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 10
    if(this.pregunta10 == "the")
    {
      buenas++;
    }
    else
    {
      errores = errores + "pregunta 10";
    }
    if(buenas == 10)
    {
      this.toastr.success('You are progressing very well', 'Very well!',
      {
        positionClass: 'toast-bottom-right',
      });
      this.showTeoria = false;
      this.showEx1 = false;
      this.showEx2 = true;
    }
    else
    {
      this.toastr.warning('You have some mistakes in: '+errores, 'Very well!',
      {
        positionClass: 'toast-bottom-right',
      });
    }
  }

  checkResp2()
  {
    let errores = "", buenas = 0;
    this.pregunta1 = this.ejercicio2.value.pregunta1;
    this.pregunta2 = this.ejercicio2.value.pregunta2;
    this.pregunta3 = this.ejercicio2.value.pregunta3;
    this.pregunta4 = this.ejercicio2.value.pregunta4;
    this.pregunta5 = this.ejercicio2.value.pregunta5;
    this.pregunta6 = this.ejercicio2.value.pregunta6;
    this.pregunta7 = this.ejercicio2.value.pregunta7;
    this.pregunta8 = this.ejercicio2.value.pregunta8;
    this.pregunta9 = this.ejercicio2.value.pregunta9;
    this.pregunta10 = this.ejercicio2.value.pregunta10;

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 1
    if(this.pregunta1 == "a")
    {
      buenas++;
    }
    else
    {
      errores = "pregunta 1, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 2
    if(this.pregunta2 == "an")
    {
      buenas++;
    }
    else
    {
      errores = errores + "pregunta 2, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 3
    if(this.pregunta3 == "some")
    {
      buenas++;
    }
    else
    {
      errores = errores + "pregunta 3, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 4
    if(this.pregunta4 == "a")
    {
      buenas++;
    }
    else
    {
      errores = errores + "pregunta 4, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 5
    if(this.pregunta5 == "some")
    {
      buenas++;
    }
    else
    {
      errores = errores + "pregunta 5, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 6
    if(this.pregunta6 == "a")
    {
      buenas++;
    }
    else
    {
      errores = errores + "pregunta 6, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 7
    if(this.pregunta7 == "some")
    {
      buenas++;
    }
    else
    {
      errores = errores + "pregunta 7, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 8
    if(this.pregunta8 == "a")
    {
      buenas++;
    }
    else
    {
      errores = errores + "pregunta 8, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 9
    if(this.pregunta9 == "some")
    {
      buenas++;
    }
    else
    {
      errores = errores + "pregunta 9, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 10
    if(this.pregunta10 == "some")
    {
      buenas++;
    }
    else
    {
      errores = errores + "pregunta 10";
    }
    if(buenas == 10)
    {
      this.toastr.success('You are progressing very well', 'Very well!',
      {
        positionClass: 'toast-bottom-right',
      });
      this.showTeoria = false;
      this.showEx1 = false;
      this.showEx2 = true;
    }
    else
    {
      this.toastr.warning('You have some mistakes in: '+errores, 'Very well!',
      {
        positionClass: 'toast-bottom-right',
      });
    }
  }
}
