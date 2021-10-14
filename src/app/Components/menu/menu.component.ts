import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nombreUsuario: string = "";
  constructor(private _userService: UsuarioService) { }

  ngOnInit(): void 
  {
    this.datos();
  }

  datos()
  {
    this.nombreUsuario = this._userService.USER;
  }

}
