import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class CookiesServicesService 
{
  existenciaCookie: boolean;
  constructor(private _cookies: CookieService,
              private router: Router,
              private toastr: ToastrService,) 
  { 
    this.existenciaCookie = false;
  }

  setToken(token: string, minutos: number)
  {
    this._cookies.set("token", token, minutos);
  }

  getToken()
  {
    return this._cookies.get("token");
  }

  getRandomToken(size: number)
  {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < size; i++)
    {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

  Logout()
  {
    
    this.router.navigate(['/login']);

    this._cookies.delete("token", "/");
  }

  nuevaExpiracion(minutos: number)
  {
    return (1/1440)*minutos;
  }

  checkToken()
  {
    let cookie = this.getToken();
    if(!cookie)
    {
      this.Logout();
      this.toastr.warning('Favor de iniciar sesion antes de ejecutar cualquier acción', 'ADVERTENCIA',
          {
            positionClass: 'toast-bottom-right'
          });
      this.existenciaCookie = false;
    }
    else
    {
      this.setToken(this.getToken(), this.nuevaExpiracion(5));
      this.existenciaCookie = true;
    }
    return cookie;
  }
}
