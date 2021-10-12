import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit 
{
  datosRegistro: FormGroup;
  registroFirebase: any;
  Cargando = false;
  loading = true;
  submitted = false;
  nombre!: string;
  apellido!: string;
  correo!: string;
  usuario!: string;
  contra1: string = "";
  contra2!: string;

  constructor(private fb:FormBuilder,
              private toastr: ToastrService,
              private _userService: UsuarioService,) 
  { 
    this.datosRegistro = this.fb.group
    ({
      name: ['', [Validators.required, Validators.pattern("^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$")]],
      lastName: ['', [Validators.required, Validators.pattern("^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$")]],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._-]*$")]],
      psw1: ['', [Validators.required, Validators.pattern("^[a-zA-záéíóúÁÉÍÓÚñÑ0-9&#$%()=¿?¡!._-]*$")]],
      psw2: ['', [Validators.required, Validators.pattern("^[a-zA-záéíóúÁÉÍÓÚñÑ0-9&#$%()=¿?¡!._-]*$")]],
    });
  }

  ngOnInit(): void {
  }

  registrarUser()
  {
    this.contra1 = this.datosRegistro.value.psw1;
    this.contra2 = this.datosRegistro.value.psw2;
    if(this.contra1 == this.contra2)
    {
      this.correo = this.datosRegistro.value.email;
      this.registroFirebase = this._userService.EmailUser(this.correo).then(snapshot => {
        if(snapshot.empty)
        {
          this.usuario = this.datosRegistro.value.userName;
          this.registroFirebase = this._userService.NomUser(this.usuario).then(snapshot => {
            if(snapshot.empty)
            {
              this.nombre = this.datosRegistro.value.name;
              this.apellido = this.datosRegistro.value.lastName;
              this.nuevoCajero();
              this.toastr.success('El registro se realizo con exito', 'Acción exitosa',
              {
                positionClass: 'toast-bottom-right'
              });
              this.Cargando = false;
              this.loading = true;
            }
            else
            {
              this.toastr.error('El usuario ya existe', 'Error!',
              {
                positionClass: 'toast-bottom-right'
              });
              this.Cargando = false;
              this.loading = true;
              return;
            }
          })
        }
        else
        {
          this.toastr.error('El correo ya existe', 'Error!',
              {
                positionClass: 'toast-bottom-right'
              });
              this.Cargando = false;
              this.loading = true;
              return;
        }
        this.Cargando = false;
        this.loading = true;
      })
    }
    else
    {
      this.toastr.error('Las contraseñas no coinciden', 'Erro!',
      {
        positionClass: 'toast-bottom-right'
      });
    }
  }

  nuevoCajero()
  {
    const registroU: any =
    {
      //Se obtienen los valores de los campos del forms
      Nombre: this.nombre,
      Apellido: this.apellido,
      Usuario: this.usuario,
      Email: this.correo,
      Password: this.contra1
    }
    
    this._userService.registarUsuario(registroU).then(() => 
    {
      this.Cargando = false;
      this.loading = true;
      this.toastr.success('El usuario fue capturado correctamente', 'Acción exitosa',
      {
        positionClass: 'toast-bottom-right'
      }); 
    }).catch(error => 
    {
      // this.submitted = false;
      this.toastr.info('Hubo un error, favor de intentarlo más tarde', 'ERROR',
      {
        positionClass: 'toast-bottom-right'
      }); 
      this.Cargando = false;
      this.loading = true;
      // console.log(error);
    })
  }

}
