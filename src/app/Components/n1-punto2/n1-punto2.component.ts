// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
  pregunta1!: string; pregunta2!: string; pregunta3!: string;
  pregunta4!: string; pregunta5!: string; pregunta6!: string; 
  pregunta7!: string; pregunta8!: string; pregunta9!: string;
  pregunta10!: string; pregunta11!: string; pregunta12!: string;
  pregunta13!: string; pregunta14!: string; pregunta15!: string;
  pregunta16!: string; pregunta17!: string; pregunta18!: string; 
  pregunta19!: string; pregunta20!: string; pregunta21!: string; 
  pregunta22!: string; pregunta23!: string; pregunta24!: string;

  constructor(private fb:FormBuilder,
              private toastr: ToastrService,
              private _nivelesService: NivelesService,
              private _userService: UsuarioService) 
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
    }
    else
    {
      errores = "1, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 2
    if(this.pregunta2 == "am")
    {
      buenas++;
    }
    else
    {
      errores = errores + "2, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 3
    if(this.pregunta3 == "are")
    {
      buenas++;
    }
    else
    {
      errores = errores + "3, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 4
    if(this.pregunta4 == "is")
    {
      buenas++;
    }
    else
    {
      errores = errores + "4, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 5
    if(this.pregunta5 == "are")
    {
      buenas++;
    }
    else
    {
      errores = errores + "5, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 6
    if(this.pregunta6 == "are")
    {
      buenas++;
    }
    else
    {
      errores = errores + "6, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 7
    if(this.pregunta7 == "am")
    {
      buenas++;
    }
    else
    {
      errores = errores + "7, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 8
    if(this.pregunta8 == "is")
    {
      buenas++;
    }
    else
    {
      errores = errores + "8, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 9
    if(this.pregunta9 == "are")
    {
      buenas++;
    }
    else
    {
      errores = errores + "9, ";
    }

    // SE CHECA LA RESPUESTA DE LA PREGUNTA 10
    if(this.pregunta10 == "are")
    {
      buenas++;
    }
    else
    {
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
      this._nivelesService.accesoID(this._userService.USER);
      this.usuarioFirebase = this._nivelesService.accesoID(this._userService.USER).then(snapshot =>
        {
          if(snapshot.empty) 
          {
            this.toastr.error('No se encontro registro', 'Error');
            return;
          }
          this.getID(snapshot.docs);
        })
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
    this.pregunta10 = this.ejercicio2_2.value.pregunta10P2;
    this.pregunta11 = this.ejercicio2_2.value.pregunta11P2;
    this.pregunta12 = this.ejercicio2_2.value.pregunta12P2;
    this.pregunta13 = this.ejercicio2_2.value.pregunta13P2;
    this.pregunta14 = this.ejercicio2_2.value.pregunta14P2;
    this.pregunta15 = this.ejercicio2_2.value.pregunta15P2;
    this.pregunta16 = this.ejercicio2_2.value.pregunta16P2;
    this.pregunta17 = this.ejercicio2_2.value.pregunta17P2;
    this.pregunta18 = this.ejercicio2_2.value.pregunta18P2;
    this.pregunta19 = this.ejercicio2_2.value.pregunta19P2;
    this.pregunta20 = this.ejercicio2_2.value.pregunta20P2;
    this.pregunta21 = this.ejercicio2_2.value.pregunta21P2;
    this.pregunta22 = this.ejercicio2_2.value.pregunta22P2;
    this.pregunta23 = this.ejercicio2_2.value.pregunta23P2;
    this.pregunta24 = this.ejercicio2_2.value.pregunta24P2;

    // SE CHECAN LAS RESPUESTAS DE AMBOS TEXTOS
    if(this.pregunta1 == "is")
    {
      buenas++;
    }
    if(this.pregunta2 == "am")
    {
      buenas++;
    }
    if(this.pregunta3 == "am")
    {
      buenas++;
    }
    if(this.pregunta4 == "am")
    {
      buenas++;
    }
    if(this.pregunta5 == "are")
    {
      buenas++;
    }
    if(this.pregunta6 == "is")
    {
      buenas++;
    }
    if(this.pregunta7 == "are")
    {
      buenas++;
    }
    if(this.pregunta8 == "are")
    {
      buenas++;
    }
    if(this.pregunta9 == "are")
    {
      buenas++;
    }
    if(buenas != 9)
    {
      errores = "Paragraph 1."
    }

    // SEGUNDO PARRAFO
    if(this.pregunta10 == "is")
    {
      buenas++;
    }
    if(this.pregunta11 == "are")
    {
      buenas++;
    }
    if(this.pregunta12 == "are")
    {
      buenas++;
    }
    if(this.pregunta13 == "is")
    {
      buenas++;
    }
    if(this.pregunta14 == "is")
    {
      buenas++;
    }
    if(this.pregunta15 == "are")
    {
      buenas++;
    }
    if(this.pregunta16 == "are")
    {
      buenas++;
    }
    if(this.pregunta17 == "are")
    {
      buenas++;
    }
    if(this.pregunta18 == "is")
    {
      buenas++;
    }
    if(this.pregunta19 == "is")
    {
      buenas++;
    }
    if(this.pregunta20 == "am")
    {
      buenas++;
    }
    if(this.pregunta21 == "is")
    {
      buenas++;
    }
    if(this.pregunta22 == "is")
    {
      buenas++;
    }
    if(this.pregunta23 == "are")
    {
      buenas++;
    }
    if(this.pregunta24 == "am")
    {
      buenas++;
    }

    if(buenas == 24)
    {
      this.toastr.success('You are progressing very well', 'Very well!',
      {
        positionClass: 'toast-bottom-right',
      });
      this.puntaje = 10;
      this._nivelesService.accesoID(this._userService.USER);
      this.usuarioFirebase = this._nivelesService.accesoID(this._userService.USER).then(snapshot =>
        {
          if(snapshot.empty) 
          {
            this.toastr.error('No se encontro registro', 'Error');
            return;
          }
          this.getID(snapshot.docs);
        })
      this.showTeoria = false;
      this.showEx1 = false;
      this.showEx2 = true;
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
      
    });
  }

}
