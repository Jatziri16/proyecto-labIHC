import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CookiesServicesService } from 'src/app/Services/cookies-services.service';
import { NivelesService } from 'src/app/Services/niveles.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit 
{
  usuarioFirebase: any;
  nombreUsuario: string = "";
  nivel: string = "";
  progreso!: number;
  constructor(private _userService: UsuarioService,
              private _cookiesService: CookiesServicesService,
              private _nivelesService: NivelesService,
              private toastr: ToastrService,) 
  { 
    // 
  }

  ngOnInit(): void 
  {
    this.datos();
    this.renovToken();  
  }

  datos()
  {
    this.nombreUsuario = this._userService.USER;
    this.usuarioFirebase = this._nivelesService.accesoDatos(this._userService.USER).then(snapshot =>
      {
        if(snapshot.empty) 
        {
          this.toastr.error('No se encontro registro', 'Error');
          return;
        }
        this.getNivel(snapshot.docs);
      })
  }

  getNivel(data: any)
  {
    data.forEach((doc: { data: () => any; }) =>
    {
      let info = doc.data();
      if(info.Puntaje<=60)
      {
        this.nivel = "Level 1";
      }
      if(info.Puntaje>60 && info.puntaje>=120)
      {
        this.nivel = "Level 2";
      }
      if(info.Puntaje>120 && info.Puntaje<=180)
      {
        this.nivel = "Level 3";
      }

      this.progreso = (info.Puntaje)/180;
    });
  }

  renovToken()
  {
    this._cookiesService.checkToken();
  }

}
