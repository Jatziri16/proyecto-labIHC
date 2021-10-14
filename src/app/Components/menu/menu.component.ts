import { Component, OnInit } from '@angular/core';
import { CookiesServicesService } from 'src/app/Services/cookies-services.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nombreUsuario: string = "";
  constructor(private _userService: UsuarioService,
    private _cookiesService: CookiesServicesService) 
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
  }

  renovToken()
  {
    this._cookiesService.checkToken();
  }

}
