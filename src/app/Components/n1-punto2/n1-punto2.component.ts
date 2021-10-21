// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CookiesServicesService } from 'src/app/Services/cookies-services.service';
import { NivelesService } from 'src/app/Services/niveles.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-n1-punto2',
  templateUrl: './n1-punto2.component.html',
  styleUrls: ['./n1-punto2.component.css']
})
export class N1Punto2Component implements OnInit 
{
  usuarioFirebase: any;
  ejercicio1: FormGroup;
  ejercicio2: FormGroup;
  ejercicio2_2: FormGroup;
  showTeoria: boolean = true;
  showEx1: boolean = false;
  showEx2: boolean = false;
  puntaje: number = 0;
  submitted = false;
  pregunta1!: string; pregunta2!: string; pregunta3!: string;
  pregunta4!: string; pregunta5!: string; pregunta6!: string; 
  pregunta7!: string; pregunta8!: string; pregunta9!: string;
  pregunta10!: string;

  p1!: boolean; p2!: boolean; p3!: boolean; p4!: boolean;
  p8!: boolean; p7!: boolean; p6!: boolean; p5!: boolean;
  p10!: boolean; p9!: boolean;

  p1_2!: boolean; p2_2!: boolean; p3_2!: boolean; p4_2!: boolean;
  p8_2!: boolean; p7_2!: boolean; p6_2!: boolean; p5_2!: boolean;
  p10_2!: boolean; p9_2!: boolean; p15_2!: boolean;
  p11_2!: boolean; p12_2!: boolean; p13_2!: boolean; p14_2!: boolean;

  constructor(private fb:FormBuilder,
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
      pregunta7P1: ['', Validators.required],
      pregunta8P1: ['', Validators.required],
      pregunta9P1: ['', Validators.required],
      pregunta10P1: ['', Validators.required],
    });

    this.ejercicio2 = this.fb.group({
      pregunta1P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      pregunta2P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      pregunta3P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      pregunta4P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      pregunta5P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      pregunta6P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      pregunta7P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      pregunta8P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      pregunta9P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
    });

    this.ejercicio2_2 = this.fb.group({
      pregunta10P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      pregunta11P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      pregunta12P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      pregunta13P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      pregunta14P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      pregunta15P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      pregunta16P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      pregunta17P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      pregunta18P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      pregunta19P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      pregunta20P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      pregunta21P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      pregunta22P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      pregunta23P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      pregunta24P2: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]]
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
    this.showEx2 = false;
  }

  // Checa las respuestas del primer ejercicio, de ser correctas se mostrará el ejercicio 2
  checkResp1()
  {
    this.submitted = true;
    let errores = "", buenas = 0;
    this.pregunta1 = this.ejercicio1.value.pregunta1P1;
    this.pregunta2 = this.ejercicio1.value.pregunta2P1;
    this.pregunta3 = this.ejercicio1.value.pregunta3P1;
    this.pregunta4 = this.ejercicio1.value.pregunta4P1;
    this.pregunta5 = this.ejercicio1.value.pregunta5P1;
    this.pregunta6 = this.ejercicio1.value.pregunta6P1;
    this.pregunta7 = this.ejercicio1.value.pregunta7P1;
    this.pregunta8 = this.ejercicio1.value.pregunta8P1;
    this.pregunta9 = this.ejercicio1.value.pregunta9P1;
    this.pregunta10 = this.ejercicio1.value.pregunta10P1;
    
    // SE CHECA LA RESPUESTA DE LA PREGUNTA 1
    if(this.pregunta1 == "is")
    {
      buenas++;
      this.p1 = false;
    }
    else
    {
      this.p1 = true;
      errores = "1, ";
    }
    // SE CHECA LA RESPUESTA DE LA PREGUNTA 2
    if(this.pregunta2 == "am")
    {
      this.p2 = false;
      buenas++;
    }
    else
    {
      this.p2 = true;
      errores = errores + "2, ";
    }
    // SE CHECA LA RESPUESTA DE LA PREGUNTA 3
    if(this.pregunta3 == "are")
    {
      this.p3 = false;
      buenas++;
    }
    else
    {
      this.p3 = true;
      errores = errores + "3, ";
    }
    // SE CHECA LA RESPUESTA DE LA PREGUNTA 4
    if(this.pregunta4 == "is")
    {
      this.p4 = false;
      buenas++;
    }
    else
    {
      this.p4 = true;
      errores = errores + "4, ";
    }
    // SE CHECA LA RESPUESTA DE LA PREGUNTA 5
    if(this.pregunta5 == "are")
    {
      this.p5 = false;
      buenas++;
    }
    else
    {
      this.p5 = true;
      errores = errores + "5, ";
    }
    // SE CHECA LA RESPUESTA DE LA PREGUNTA 6
    if(this.pregunta6 == "are")
    {
      this.p6 = false;
      buenas++;
    }
    else
    {
      this.p6 = true;
      errores = errores + "6, ";
    }
    // SE CHECA LA RESPUESTA DE LA PREGUNTA 7
    if(this.pregunta7 == "am")
    {
      this.p7 = false;
      buenas++;
    }
    else
    {
      this.p7 = true;
      errores = errores + "7, ";
    }
    // SE CHECA LA RESPUESTA DE LA PREGUNTA 8
    if(this.pregunta8 == "is")
    {
      this.p8 = false;
      buenas++;
    }
    else
    {
      this.p8 = true;
      errores = errores + "8, ";
    }
    // SE CHECA LA RESPUESTA DE LA PREGUNTA 9
    if(this.pregunta9 == "are")
    {
      this.p9 = false;
      buenas++;
    }
    else
    {
      this.p9 = true;
      errores = errores + "9, ";
    }
    // SE CHECA LA RESPUESTA DE LA PREGUNTA 10
    if(this.pregunta10 == "are")
    {
      this.p10 = false;
      buenas++;
    }
    else
    {
      this.p10 = true;
      errores = errores + "10";
    }

    if(buenas == 10)
    {
      this.toastr.success('You are progressing very well', 'Very well!',
      {
        positionClass: 'toast-bottom-right',
      });
      // console.log(this._userService.USER);
      this.puntaje = 5;
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

  // Checa las respuestas del primer ejercicio, de ser correctas se mostrará el ejercicio 2
  checkResp2()
  {
    this.submitted = true;
    let buenas = 0, errores = "", errores2 = "";
    this.pregunta1 = this.ejercicio2.value.pregunta1P2;
    this.pregunta2 = this.ejercicio2.value.pregunta2P2;
    this.pregunta3 = this.ejercicio2.value.pregunta3P2;
    this.pregunta4 = this.ejercicio2.value.pregunta4P2;
    this.pregunta5 = this.ejercicio2.value.pregunta5P2;
    this.pregunta6 = this.ejercicio2.value.pregunta6P2;
    this.pregunta7 = this.ejercicio2.value.pregunta7P2;
    this.pregunta8 = this.ejercicio2.value.pregunta8P2;
    this.pregunta9 = this.ejercicio2.value.pregunta9P2;

    // SE CHECAN LAS RESPUESTAS DE AMBOS TEXTOS
    if(this.pregunta1 == "is")
    {
      this.p1 = false;
      buenas++;
    }
    else
    {
      this.p1 = true;
    }
    if(this.pregunta2 == "am")
    {
      this.p2 = true;
      buenas++;
    }
    else
    {
      this.p2 = true;
    }
    if(this.pregunta3 == "am")
    {
      this.p3 = false;
      buenas++;
    }
    else
    {
      this.p3 = true;
    }
    if(this.pregunta4 == "am")
    {
      this.p4 = false;
      buenas++;
    }
    else
    {
      this.p4 = true;
    }
    if(this.pregunta5 == "are")
    {
      this.p5 = false;
      buenas++;
    }
    else
    {
      this.p5 = true;
    }
    if(this.pregunta6 == "is")
    {
      this.p6 = false;
      buenas++;
    }
    else
    {
      this.p6 = true;
    }
    if(this.pregunta7 == "are")
    {
      this.p7 = false;
      buenas++;
    }
    else
    {
      this.p7 = true;
    }
    if(this.pregunta8 == "are")
    {
      this.p8 = false;
      buenas++;
    }
    else
    {
      this.p8 = true;
    }
    if(this.pregunta9 == "are")
    {
      this.p9 = false;
      buenas++;
    }
    else
    {
      this.p9 = true;
    }
    if(buenas != 9)
    {
      errores = "Paragraph 1."
    }

    // SEGUNDO PARRAFO
    if(this.ejercicio2_2.value.pregunta10P2 == "is")
    {
      this.p1_2 = false;
      buenas++;
    }
    else
    {
      this.p1_2 = true;
    }
    if(this.ejercicio2_2.value.pregunta11P2 == "are")
    {
      this.p2_2 = false;
      buenas++;
    }
    else
    {
      this.p2_2 = true;
    }
    if(this.ejercicio2_2.value.pregunta12P2 == "are")
    {
      this.p3_2 = false;
      buenas++;
    }
    else
    {
      this.p3_2 = true;
    }
    if(this.ejercicio2_2.value.pregunta13P2 == "is")
    {
      this.p4_2 = false;
      buenas++;
    }
    else
    {
      this.p4_2 = true;
    }
    if(this.ejercicio2_2.value.pregunta14P2 == "is")
    {
      this.p5_2 = false;
      buenas++;
    }
    else
    {
      this.p5_2 = true;
    }
    if(this.ejercicio2_2.value.pregunta15P2 == "are")
    {
      this.p6_2 = false;
      buenas++;
    }
    else
    {
      this.p6_2 = true;
    }
    if(this.ejercicio2_2.value.pregunta16P2 == "are")
    {
      this.p7_2 = false;
      buenas++;
    }
    else
    {
      this.p7_2 = true;
    }
    if(this.ejercicio2_2.value.pregunta17P2 == "are")
    {
      this.p8_2 = false;
      buenas++;
    }
    else
    {
      this.p8_2 = true;
    }
    if(this.ejercicio2_2.value.pregunta18P2 == "is")
    {
      this.p9_2 = false;
      buenas++;
    }
    else
    {
      this.p9_2 = true;
    }
    if(this.ejercicio2_2.value.pregunta19P2 == "is")
    {
      this.p10_2 = false;
      buenas++;
    }
    else
    {
      this.p10_2 = true;
    }
    if(this.ejercicio2_2.value.pregunta20P2 == "am")
    {
      this.p11_2 = false;
      buenas++;
    }
    else
    {
      this.p11_2 = true;
    }
    if(this.ejercicio2_2.value.pregunta21P2 == "is")
    {
      this.p12_2 = false;
      buenas++;
    }
    else
    {
      this.p12_2 = true;
    }
    if(this.ejercicio2_2.value.pregunta22P2 == "is")
    {
      this.p13_2 = false;
      buenas++;
    }
    else
    {
      this.p13_2 = true;
    }
    if(this.ejercicio2_2.value.pregunta23P2 == "are")
    {
      this.p14_2 = false;
      buenas++;
    }
    else
    {
      this.p14_2 = true;
    }
    if(this.ejercicio2_2.value.pregunta24P2 == "am")
    {
      this.p15_2 = false;
      buenas++;
    }
    else
    {
      this.p15_2 = true;
    }

    if(buenas == 24)
    {
      this.toastr.success('You are progressing very well', 'Very well!',
        {
          positionClass: 'toast-bottom-right',
        });
      this.puntaje = 10;
      this.usuarioFirebase = this._nivelesService.accesoDatos(this._userService.USER).then(snapshot =>
        {
          if(snapshot.empty) 
          {
            this.toastr.error('No se encontro registro', 'Error');
            return;
          }
          this.getID(snapshot.docs);
        })
        // this.toastr.success('You are progressing very well', 'Very well!',
        // {
        //   positionClass: 'toast-bottom-right',
        // });

      this.submitted = false;
      // this.router.navigate(['/level1']);
      // this.showTeoria = false;
      // this.showEx1 = false;
      // this.showEx2 = true;
    }
    else
    {
      errores2 = "Paragraph 2."
      this.toastr.warning('You have some mistakes in: '+errores+errores2, 'Be carfull!',
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

      if(this.puntaje==10)
      {
        this.router.navigate(['/level1']);
      }
      
    });
  }

}
