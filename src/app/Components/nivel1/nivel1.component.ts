import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CookiesServicesService } from 'src/app/Services/cookies-services.service';
import { NivelesService } from 'src/app/Services/niveles.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-nivel1',
  templateUrl: './nivel1.component.html',
  styleUrls: ['./nivel1.component.css']
})
export class Nivel1Component implements OnInit 
{
  usuarioFirebase: any;
  puntajeTotal: number = 0;
  constructor(private _userService: UsuarioService,
              private _nivelesService: NivelesService,
              private toastr: ToastrService,
              private _cookiesService: CookiesServicesService) 
  { 
    // 
  }

  ngOnInit(): void 
  {
    this.habilitarTemas();
    this.renovToken();  
  }

  renovToken()
  {
    this._cookiesService.checkToken();
  }

  habilitarTemas()
  {
    this._userService.USER;
    this.usuarioFirebase = this._nivelesService.accesoDatos(this._userService.USER).then(snapshot =>
      {
        if(snapshot.empty) 
        {
          this.toastr.error('No se encontro registro, vuelva a iniciar sesión.', 'Error');
          return;
        }
        this.getPuntaje(snapshot.docs);
      })
  }

  getPuntaje(data: any)
  {
    data.forEach((doc: { data: () => any; }) =>
    {
      let info = doc.data();
      this.puntajeTotal = info.Puntaje;
      console.log("Puntaje total: "+this.puntajeTotal);
    });
  }
}
