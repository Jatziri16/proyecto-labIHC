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

  p1!: boolean; p1_1!:boolean; p2!: boolean; p3!: boolean; 
  p4!: boolean; p5!: boolean; p6!: boolean; p7!: boolean; 
  p8!: boolean; p9!: boolean; p10!: boolean; 

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
    // this.pregunta1 = this.ejercicio1.value.pregunta1;
    // this.pregunta1_1 = this.ejercicio1.value.pregunta1_1;
    // this.pregunta2 = this.ejercicio1.value.pregunta2;
    // this.pregunta3 = this.ejercicio1.value.pregunta3;
    // this.pregunta4 = this.ejercicio1.value.pregunta4;
    // this.pregunta5 = this.ejercicio1.value.pregunta5;
    // this.pregunta6 = this.ejercicio1.value.pregunta6;
    // this.pregunta7 = this.ejercicio1.value.pregunta7;
    // this.pregunta8 = this.ejercicio1.value.pregunta8;
    // this.pregunta9 = this.ejercicio1.value.pregunta9;
    // this.pregunta10 = this.ejercicio1.value.pregunta10;

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 1
    if(this.ejercicio1.value.pregunta1 == "the")
    {
      buenas++;
      this.p1 = false;
    }
    else
    {
      errores = "1, ";
      this.p1 = true;
    }
    if(this.ejercicio1.value.pregunta1_1 == "the")
    {
      buenas++;
      this.p1_1 = false;
    }
    else
    {
      errores = "1.1, ";
      this.p1_1 = true;
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 2
    if(this.ejercicio1.value.pregunta2 == "an")
    {
      buenas++;
      this.p2 = false;
    }
    else
    {
      errores = errores + "2, ";
      this.p2 = true;
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 3
    if(this.ejercicio1.value.pregunta3 == "the")
    {
      buenas++;
      this.p3 = false;
    }
    else
    {
      errores = errores + "3, ";
      this.p3 = true;
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 4
    if(this.ejercicio1.value.pregunta4 == "x")
    {
      buenas++;
      this.p4 = false;
    }
    else
    {
      errores = errores + "4, ";
      this.p4 = true;
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 5
    if(this.ejercicio1.value.pregunta5 == "an")
    {
      buenas++;
      this.p5 = false;
    }
    else
    {
      errores = errores + "5, ";
      this.p5 = true;
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 6
    if(this.ejercicio1.value.pregunta6 == "an")
    {
      buenas++;
      this.p6 = false;
    }
    else
    {
      errores = errores + "6, ";
      this.p6 = true;
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 7
    if(this.ejercicio1.value.pregunta7 == "a")
    {
      buenas++;
      this.p7 = false;
    }
    else
    {
      errores = errores + "7, ";
      this.p7 = true;
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 8
    if(this.ejercicio1.value.pregunta8 == "x")
    {
      buenas++;
      this.p8 = false;
    }
    else
    {
      errores = errores + "8, ";
      this.p8 = true;
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 9
    if(this.ejercicio1.value.pregunta9 == "a")
    {
      buenas++;
      this.p9 = false;
    }
    else
    {
      errores = errores + "9, ";
      this.p9 = true;
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 10
    if(this.ejercicio1.value.pregunta10 == "the")
    {
      buenas++;
      this.p10 = false;
    }
    else
    {
      errores = errores + "10";
      this.p10 = true;
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
      this.p1 = false;
      buenas++;
    }
    else
    {
      errores = "1, ";
      this.p1 = true;
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 2
    if(this.pregunta2 == "an")
    {
      this.p2 = false;
      buenas++;
    }
    else
    {
      errores = errores + "2, ";
      this.p2 = true;
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 3
    if(this.pregunta3 == "some")
    {
      this.p3 = false;
      buenas++;
    }
    else
    {
      errores = errores + "3, ";
      this.p3 = true;
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 4
    if(this.pregunta4 == "a")
    {
      this.p4 = false;
      buenas++;
    }
    else
    {
      errores = errores + "4, ";
      this.p4 = true;
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 5
    if(this.pregunta5 == "some")
    {
      this.p5 = false;
      buenas++;
    }
    else
    {
      errores = errores + "5, ";
      this.p5 = true;
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 6
    if(this.pregunta6 == "a")
    {
      this.p6 = false;
      buenas++;
    }
    else
    {
      errores = errores + "6, ";
      this.p6 = true;
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 7
    if(this.pregunta7 == "some")
    {
      this.p7 = false;
      buenas++;
    }
    else
    {
      errores = errores + "7, ";
      this.p7 = true;
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 8
    if(this.pregunta8 == "a")
    {
      this.p8 = false;
      buenas++;
    }
    else
    {
      errores = errores + "8, ";
      this.p8 = true;
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 9
    if(this.pregunta9 == "some")
    {
      this.p9 = false;
      buenas++;
    }
    else
    {
      errores = errores + "9, ";
      this.p9 = true;
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 10
    if(this.pregunta10 == "some")
    {
      this.p10 = false;
      buenas++;
    }
    else
    {
      errores = errores + "10";
      this.p10 = true;
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
      if(info.Puntaje<20)
      {
        this._nivelesService.actualizacionPuntaje(info.ID, this.puntaje)
        if(this.puntaje==20)
        {
          this.toastr.info('Now the next level is available!', 'Excelent!!',
          {
            positionClass: 'toast-bottom-right',
          });
        }
      }
      if(this.puntaje==20)
      {
        this.router.navigate(['/level1']);
      }
      
    });
  }
}
