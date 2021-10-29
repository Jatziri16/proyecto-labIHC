import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  puntaje: number = 0;
  p1!: boolean; p2!: boolean; p3!: boolean; p4!: boolean; 
  p5!: boolean; p6!: boolean; p7!: boolean; p8!: boolean;
  p9!: boolean;
  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private _nivelesService: NivelesService,
              private _userService: UsuarioService,
              private router: Router,
              private _cookiesService: CookiesServicesService) 
  { 
    //
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
    this.submitted = true;
    let errores = "", buenas = 0;
    // 

    if(buenas == 9)
    {
      // 
    }
  }

  getID(data: any)
  {
    data.forEach((doc: { data: () => any; }) =>
    {
      let info = doc.data();
      if(info.Puntaje<30)
      {
        this._nivelesService.actualizacionPuntaje(info.ID, this.puntaje)
        if(this.puntaje==30)
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
        if(this.puntaje==30)
        {
          this.router.navigate(['/level1']);
        }
      }
    });
  }
}
