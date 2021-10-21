import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CookiesServicesService } from 'src/app/Services/cookies-services.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  datosLogin: FormGroup;
  usuarioFirebase: any;
  usuario!: string;
  contra!: string;
  intentos: number = 0; // Lleva el conteo del numero de intentos al iniciar sesión, si junta 3 se bloquerá
  loading: boolean = false; // Controla si se muestra el spinner o no en el html
  bloqueo: boolean = false; // Controla el bloqueo del botón en caso de exceder el número de intentos

  constructor(firestore: AngularFirestore,
              private fb:FormBuilder,
              private toastr: ToastrService,
              private _userService: UsuarioService,
              private router: Router,
              private _cookiesService: CookiesServicesService) 
  { 
    this.datosLogin = this.fb.group({
      User: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
      Password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
    });
  }

  ngOnInit(): void 
  {
    this._cookiesService.Logout();
  }

  //Funcion inicial
  inicioSesion()
  {
    this.loading = true;
    this.bloqueo = true;

    if(this.datosLoginControl.Password.invalid || this.datosLoginControl.User.invalid)
    {
      this.toastr.error('Todos los datos son obligatorios', 'Error');
      this.loading = false;
      this.bloqueo = false;
      return;
    }
    else
    {
      this.usuarioFirebase = this._userService.Login(this.datosLogin.value.User).then(snapshot =>
      {
        if(snapshot.empty) 
        {
          this.toastr.error('No se encontro registro', 'Error');
          this.loading = false;
          this.bloqueo = false
          return;
        }
        this._userService.GuardaNomUser(this.datosLogin.value.User); // Guarda el nombre de usuario para más adelante poder tener acceso a su id
        this.getInfo(snapshot.docs);
      })
    }
  }

  getInfo(data: any)
  {
    data.forEach((doc: { data: () => any; }) =>
    {
      let info = doc.data();
      
      if(info.Contrasenia == this.datosLogin.value.Password)
      {
        // Se genera la cookie
        this._cookiesService.setToken(this._cookiesService.getRandomToken(16), this._cookiesService.nuevaExpiracion(5));
        this.toastr.success('Acceso concedido.', 'Éxito!');
        this.loading = false;
        this.bloqueo = false;
        this.router.navigate(['/menu']);
      }
      else
      {
        // console.log('Acceso rechazado');
        this.toastr.warning('Acceso Rechazado.', 'Error!');
        this.loading = false;
        this.bloqueo = false;
        // A partir de aqui cuenta los intentos, si excedes de 3 intentos para ingresar tendrá que esperar 3min para volver a intentarlo
        this.intentos += 1;
        // console.log("Numero de intentos: " + this.intentos);
        if (this.intentos == 3)
        {
          this.bloqueo = true;
          this.toastr.warning('Excedió el número de intentos, espere 3 minutos.', 'Warning!');

          setTimeout(()=>{            
            this.bloqueo = false;
            // console.log("Listo, puedes seguir jeje")
            this.toastr.info('Listo, puede continuar.', 'Info!');
          }, 3000); // 180000 milisegundos = 3min
          this.intentos = 0;
        }
      }
    });
  }

  get datosLoginControl()
  {
    return this.datosLogin.controls
  }

}
