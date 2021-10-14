import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CookiesServicesService } from 'src/app/Services/cookies-services.service';
import { NivelesService } from 'src/app/Services/niveles.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-n1-punto3',
  templateUrl: './n1-punto3.component.html',
  styleUrls: ['./n1-punto3.component.css']
})
export class N1Punto3Component implements OnInit 
{
  usuarioFirebase: any;
  ejercicio1: FormGroup;
  ejercicio2: FormGroup;
  puntaje: number = 0;
  showTeoria: boolean = true;
  showEx1: boolean = false;
  showEx2: boolean = false;

  pregunta1!: string; pregunta2!: string; pregunta3!: string;
  pregunta4!: string; pregunta5!: string; pregunta6!: string; 
  pregunta7!: string; pregunta8!: string; pregunta9!: string;
  pregunta10!: string; pregunta1_1!: string;

  constructor(private fb:FormBuilder,
              private toastr: ToastrService,
              private _userService: UsuarioService,
              private _nivelesService: NivelesService,
              private router: Router,
              private _cookiesService: CookiesServicesService) 
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
    this.renovToken();  
  }

  renovToken()
  {
    this._cookiesService.checkToken();
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
    if(this.ejercicio1.value.pregunta1 == "the")
    {
      buenas++;
    }
    else
    {
      errores = "1, ";
    }
    if(this.ejercicio1.value.pregunta1_1 == "the")
    {
      buenas++;
    }
    else
    {
      errores = "1.1, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 2
    if(this.ejercicio1.value.pregunta2 == "an")
    {
      buenas++;
    }
    else
    {
      errores = errores + "2, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 3
    if(this.ejercicio1.value.pregunta3 == "the")
    {
      buenas++;
    }
    else
    {
      errores = errores + "3, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 4
    if(this.ejercicio1.value.pregunta4 == "x")
    {
      buenas++;
    }
    else
    {
      errores = errores + "4, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 5
    if(this.ejercicio1.value.pregunta5 == "an")
    {
      buenas++;
    }
    else
    {
      errores = errores + "5, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 6
    if(this.ejercicio1.value.pregunta6 == "an")
    {
      buenas++;
    }
    else
    {
      errores = errores + "6, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 7
    if(this.ejercicio1.value.pregunta7 == "a")
    {
      buenas++;
    }
    else
    {
      errores = errores + "7, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 8
    if(this.ejercicio1.value.pregunta8 == "x")
    {
      buenas++;
    }
    else
    {
      errores = errores + "8, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 9
    if(this.ejercicio1.value.pregunta9 == "a")
    {
      buenas++;
    }
    else
    {
      errores = errores + "9, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 10
    if(this.ejercicio1.value.pregunta10 == "the")
    {
      buenas++;
    }
    else
    {
      errores = errores + "10";
    }
    if(buenas == 11)
    {
      this.puntaje = 15;
      this.usuarioFirebase = this._nivelesService.accesoDatos(this._userService.USER).then(snapshot =>
        {
          if(snapshot.empty) 
          {
            this.toastr.error('No se encontro registro', 'Error');
            return;
          }
          this.getID(snapshot.docs);
        })

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
      this.toastr.warning('You have some mistakes in the question: '+errores, 'Oh no!',
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
      errores = "1, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 2
    if(this.pregunta2 == "an")
    {
      buenas++;
    }
    else
    {
      errores = errores + "2, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 3
    if(this.pregunta3 == "some")
    {
      buenas++;
    }
    else
    {
      errores = errores + "3, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 4
    if(this.pregunta4 == "a")
    {
      buenas++;
    }
    else
    {
      errores = errores + "4, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 5
    if(this.pregunta5 == "some")
    {
      buenas++;
    }
    else
    {
      errores = errores + "5, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 6
    if(this.pregunta6 == "a")
    {
      buenas++;
    }
    else
    {
      errores = errores + "6, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 7
    if(this.pregunta7 == "some")
    {
      buenas++;
    }
    else
    {
      errores = errores + "7, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 8
    if(this.pregunta8 == "a")
    {
      buenas++;
    }
    else
    {
      errores = errores + "8, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 9
    if(this.pregunta9 == "some")
    {
      buenas++;
    }
    else
    {
      errores = errores + "9, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 10
    if(this.pregunta10 == "some")
    {
      buenas++;
    }
    else
    {
      errores = errores + "10";
    }
    if(buenas == 10)
    {
      this.puntaje = 20;
      this.usuarioFirebase = this._nivelesService.accesoDatos(this._userService.USER).then(snapshot =>
        {
          if(snapshot.empty) 
          {
            this.toastr.error('No se encontro registro', 'Error');
            return;
          }
          this.getID(snapshot.docs);
        })

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
      this.toastr.warning('You have some mistakes in the question: '+errores, 'Be carfull!',
      {
        positionClass: 'toast-bottom-right',
      });
    }
  }

  getID(data: any)
  {
    data.forEach((doc: { data: () => any; }) =>
    {
      let info = doc.data();
      this._nivelesService.actualizacionPuntaje(info.ID, this.puntaje)

      if(this.puntaje==20)
      {
        this.router.navigate(['/level1']);
      }
      
    });
  }
}
