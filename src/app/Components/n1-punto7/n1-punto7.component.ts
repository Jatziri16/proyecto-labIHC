import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CookiesServicesService } from 'src/app/Services/cookies-services.service';
import { NivelesService } from 'src/app/Services/niveles.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-n1-punto7',
  templateUrl: './n1-punto7.component.html',
  styleUrls: ['./n1-punto7.component.css']
})
export class N1Punto7Component implements OnInit 
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

  controlEjercicio1()
  {
    this.showTeoria = false;
    this.showEx1 = true;
  }

  checkResp1()
  {
    this.submitted = true;
    let errores = "", buenas = 0;
    if(this.ejercicio1.value.pregunta1 == "am")
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
    if(this.ejercicio1.value.pregunta2 == "am")
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
    if(this.ejercicio1.value.pregunta3 == "are")
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
    if(this.ejercicio1.value.pregunta4 == "is")
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
    if(this.ejercicio1.value.pregunta5 == "am")
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
    if(this.ejercicio1.value.pregunta6 == "are")
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
    if(this.ejercicio1.value.pregunta7 == "am")
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
    if(this.ejercicio1.value.pregunta8 == "is")
    {
      this.p8 = false;
      buenas++;
    }
    else
    {
      errores = errores + "8";
      this.p8 = true;
    }

    if(buenas == 8)
    {
      this.puntaje = 50;
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
      if(info.Puntaje<50)
      {
        this._nivelesService.actualizacionPuntaje(info.ID, this.puntaje)
        if(this.puntaje==50)
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
        if(this.puntaje==50)
        {
          this.router.navigate(['/level1']);
        }
      }
    });
  }
}
