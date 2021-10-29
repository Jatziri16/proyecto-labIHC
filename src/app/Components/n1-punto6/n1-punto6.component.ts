import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CookiesServicesService } from 'src/app/Services/cookies-services.service';
import { NivelesService } from 'src/app/Services/niveles.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-n1-punto6',
  templateUrl: './n1-punto6.component.html',
  styleUrls: ['./n1-punto6.component.css']
})
export class N1Punto6Component implements OnInit 
{ 

  usuarioFirebase: any;
  showTeoria: boolean = true;
  showEx1: boolean = false;
  submitted = false;
  bloqueo = false;
  ejercicio1: FormGroup;
  puntaje: number = 0;
  p1!: boolean; p2!: boolean; p3!: boolean; p4!: boolean; 
  p5!: boolean; p6!: boolean; p7!: boolean; p8!: boolean;
  p9!: boolean; p10!: boolean; p11!: boolean; p12!: boolean;
  p13!: boolean; p14!: boolean; p15!:boolean;

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private _nivelesService: NivelesService,
              private _userService: UsuarioService,
              private router: Router,
              private _cookiesService: CookiesServicesService) 
  { 
    this.ejercicio1 = this.fb.group({
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
      pregunta11: ['', Validators.required],
      pregunta12: ['', Validators.required],
      pregunta13: ['', Validators.required],
      pregunta14: ['', Validators.required],
      pregunta15: ['', Validators.required],
    });
  }

  ngOnInit(): void 
  {
    // 
  }

  renovToken()
  {
    this._cookiesService.checkToken();
  }

  controlEjercicio1()
  {
    this.showTeoria = false;
    this.showEx1 = true;
  }

  checkResp1()
  {
    let errores = "", buenas = 0;
    if(this.ejercicio1.value.pregunta1 == "doctors")
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
    if(this.ejercicio1.value.pregunta2 == "farms")
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
    if(this.ejercicio1.value.pregunta3 == "churches")
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
    if(this.ejercicio1.value.pregunta4 == "cars")
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
    if(this.ejercicio1.value.pregunta5 == "beaches")
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
    if(this.ejercicio1.value.pregunta6 == "taxes")
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
    if(this.ejercicio1.value.pregunta7 == "days")
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
    if(this.ejercicio1.value.pregunta8 == "stories")
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
    if(this.ejercicio1.value.pregunta9 == "watches")
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
    if(this.ejercicio1.value.pregunta10 == "years")
    {
      this.p10 = false;
      buenas++;
    }
    else
    {
      errores = errores + "10, ";
      this.p10 = true;
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 11
    if(this.ejercicio1.value.pregunta11 == "tomatoes")
    {
      this.p11 = false;
      buenas++;
    }
    else
    {
      errores = errores + "11, ";
      this.p11 = true;
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 12
    if(this.ejercicio1.value.pregunta12 == "wives")
    {
      this.p12 = false;
      buenas++;
    }
    else
    {
      errores = errores + "12, ";
      this.p12 = true;
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 13
    if(this.ejercicio1.value.pregunta13 == "parties")
    {
      this.p13 = false;
      buenas++;
    }
    else
    {
      errores = errores + "13, ";
      this.p13 = true;
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 14
    if(this.ejercicio1.value.pregunta14 == "eyes")
    {
      this.p14 = false;
      buenas++;
    }
    else
    {
      errores = errores + "14, ";
      this.p14 = true;
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 15
    if(this.ejercicio1.value.pregunta15 == "dresses")
    {
      this.p15 = false;
      buenas++;
    }
    else
    {
      errores = errores + "15";
      this.p15 = true;
    }

    if(buenas == 15)
    {
      this.puntaje = 40;
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
      if(info.Puntaje<40)
      {
        this._nivelesService.actualizacionPuntaje(info.ID, this.puntaje)
        if(this.puntaje==40)
        {
          this.toastr.info('Now the next level is available!', 'Excelent!!',
          {
            positionClass: 'toast-bottom-right',
          });
          
          /* Se espera 1 segundo antes de dirigirse al menu del nivel, para dar tiempo
            de que se realice la actualizacion de los puntos correctamente. */
          this.bloqueo = true;
          // console.log("Espera 1 segundo");
          setTimeout(()=>{    
            // console.log("Listo: Ruta al menu del nivel 1")
            this.bloqueo = false;
            this.router.navigate(['/level1']);      
          }, 1000); 
        }
      }
      else
      {
        if(this.puntaje == 40)
        {
          this.router.navigate(['/level1']);
        }
      }
    });
  }
}
