import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CookiesServicesService } from 'src/app/Services/cookies-services.service';
import { NivelesService } from 'src/app/Services/niveles.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-n1-punto4',
  templateUrl: './n1-punto4.component.html',
  styleUrls: ['./n1-punto4.component.css']
})
export class N1Punto4Component implements OnInit 
{

  usuarioFirebase: any;
  errores: string = "";
  errores1: string = "";
  puntaje: number = 0;
  p1!: boolean; p2!: boolean; p3!: boolean; 
  p4!: boolean; p5!: boolean; p6!: boolean;
  p7!: boolean; p8!: boolean; p9!: boolean;
  p10!: boolean;
  ejercicio1: FormGroup;
  ejercicio2: FormGroup;
  pasar = 0;
  submitted = false;
  bloqueo = false;
  
  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private _nivelesService: NivelesService,
              private _userService: UsuarioService,
              private router: Router,
              private _cookiesService: CookiesServicesService) 
  { 
    this.ejercicio1 = this.fb.group({
      pregunta1P1: ['', Validators.required],
      pregunta2P1: ['', Validators.required],
      pregunta3P1: ['', Validators.required],
      pregunta4P1: ['', Validators.required],
      pregunta5P1: ['', Validators.required],
      pregunta6P1: ['', Validators.required],
      pregunta1P2: ['', Validators.required],
      pregunta2P2: ['', Validators.required],
      pregunta3P2: ['', Validators.required],
      pregunta4P2: ['', Validators.required],
    });

    this.ejercicio2 = this.fb.group({
      
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

  checkResp1()
  {
    this.submitted = true;
    let buenas = 0;
    // SE CHECAN LAS RESPUESTAS DE AMBOS TEXTOS
    if(this.ejercicio1.value.pregunta1P1 == "go")
    {
      this.p1 = false;
      buenas++;
    }
    else
    {
      this.p1 = true;
      this.errores = this.errores + "1, ";
    }
    if(this.ejercicio1.value.pregunta2P1 == "visit")
    {
      this.p2 = false;
      buenas++;
    }
    else
    {
      this.p2 = true;
      this.errores = this.errores + "2, ";
    }
    if(this.ejercicio1.value.pregunta3P1 == "wants")
    {
      this.p3 = false;
      buenas++;
    }
    else
    {
      this.p3 = true;
      this.errores = this.errores + "3, ";
    }
    if(this.ejercicio1.value.pregunta4P1 == "knows")
    {
      this.p4 = false;
      buenas++;
    }
    else
    {
      this.p4 = true;
      this.errores = this.errores + "4, ";
    }
    if(this.ejercicio1.value.pregunta5P1 == "wants")
    {
      this.p5 = false;
      buenas++;
    }
    else
    {
      this.p5 = true;
      this.errores = this.errores + "5, ";
    }
    if(this.ejercicio1.value.pregunta6P1 == "work")
    {
      this.p6 = false;
      buenas++;
    }
    else
    {
      this.p6 = true;
      this.errores = this.errores + "6";
    }

    if(buenas == 6)
    {
      this.pasar++; 
    }

    // SE CHECAN LAS REPUESTAS DE LA SEGUNDA PARTE
    let buenas1 = 0;
    if(this.ejercicio1.value.pregunta1P2 == "1")
    {
      this.p7 = false;
      buenas1++;
    }
    else
    {
      this.p7 = true;
      this.errores1 = this.errores1 + "1, ";
    }
    if(this.ejercicio1.value.pregunta2P2 == "3")
    {
      this.p8 = false;
      buenas1++;
    }
    else
    {
      this.p8 = true;
      this.errores1 = this.errores1 + "2, ";
    }
    if(this.ejercicio1.value.pregunta3P2 == "2")
    {
      this.p9 = false;
      buenas1++;
    }
    else
    {
      this.p9 = true;
      this.errores1 = this.errores1 + "3, ";
    }
    if(this.ejercicio1.value.pregunta4P2 == "1")
    {
      this.p10 = false;
      buenas1++;
    }
    else
    {
      this.p10 = true;
      this.errores1 = this.errores1 + "4";
    }

    if(buenas1 == 4)
    {
      this.pasar++;
    }
    this.mensajeCorreccion();
  }

  mensajeCorreccion()
  {
    if(this.pasar == 2)
    {
      this.mensajeTodoCorrecto();
    }
    else if(this.pasar == 1 && this.errores == "")
    {
      this.toastr.warning('You have some mistakes in the first part in the question: '+this.errores, 'Be carfull!',
      {
        positionClass: 'toast-bottom-right',
      }); 
    }
    else if(this.pasar == 1 && this.errores1 == "")
    {
      this.toastr.warning('You have some mistakes in the second part in the question: '+this.errores1, 'Be carfull!',
      {
        positionClass: 'toast-bottom-right',
      });
    }
    else
    {

      this.toastr.warning('You have some mistake in the both parts', 'Be carfull!',
      {
        positionClass: 'toast-bottom-right',
      });
    }
  }

  mensajeTodoCorrecto()
  {
    this.toastr.success('You are progressing very well', 'Very well!',
      {
        positionClass: 'toast-bottom-right',
      });
      // ************** CHECAR EL PUNTAJE ************** @Jatziri16
      this.puntaje = 5;
      // ***********************************************
      this._nivelesService.accesoDatos(this._userService.USER);
      this.usuarioFirebase = this._nivelesService.accesoDatos(this._userService.USER).then(snapshot =>
      {
        if(snapshot.empty) 
        {
          this.toastr.error('No se encontro registro', 'Error');
          return;
        }
        this.getID(snapshot.docs);
      })
      this.submitted = false
  }

  // **************** CEHACAR LO DEL PUNTAJE *************** @Jatziri16
  getID(data: any)
  {
    data.forEach((doc: { data: () => any; }) =>
    {
      let info = doc.data();
      if(info.Puntaje<10)
      {
        this._nivelesService.actualizacionPuntaje(info.ID, this.puntaje)
        if(this.puntaje==10)
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
        if(this.puntaje==10)
        {
          this.router.navigate(['/level1']);
        }
      }
    });
  }
}
