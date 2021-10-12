import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
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
  intentos: number = 0;
  usuario: string;
  contra: string;
  loading: boolean = false;
  bloqueo: boolean = false;
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore,
              private fb:FormBuilder,
              private toastr: ToastrService,
              private _userService: UsuarioService,
              private router: Router,) 
  { 
    this.datosLogin = this.fb.group({
      User: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
      Password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
    });
    this.items = firestore.collection('Usuarios').valueChanges();
    this.usuario = "";
    this.contra = "";
  }

  ngOnInit(): void 
  {
    // 
  }

  //Funcion inicial
  inicioSesion()
  {
    this.loading = true;
    console.log("Usuario: " +this.datosLogin.value.User);
    console.log("Contraseña: " +this.datosLogin.value.Password);

    if(this.datosLoginControl.Password.invalid || this.datosLoginControl.User.invalid)
    {
      this.toastr.error('Todos los datos son obligatorios', 'Error');
      this.loading = false;
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
          return;
        }
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
        this.toastr.success('Acceso concedido.', 'Éxito!');
        //this.router.navigate(['/home']);
      }
      else
      {
        console.log('Acceso rechazado');

        // A partir de aqui cuenta los intentos, si excedes de 3 intentos para ingresar tendrá que esperar 3min para volver a intentarlo
        this.intentos += 1;
        console.log("Numero de intentos: " + this.intentos);
        if (this.intentos == 3)
        {
          this.bloqueo = true;
          this.toastr.warning('Excedió el número de intentos, espere 3 minutos.', 'Warning!');

          setTimeout(()=>{            
            this.bloqueo = false;
            console.log("Listo, puedes seguir jeje")
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
