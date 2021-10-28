import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

}
