import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  login: FormGroup;
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore,
              private fb:FormBuilder,) 
  { 
    this.login = this.fb.group({
      User: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
      Password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
    });
    this.items = firestore.collection('Usuarios').valueChanges();
  }

  ngOnInit(): void 
  {
    // 
  }

  //Funcion inicial
  inicioSesion()
  {
    console.log("Está funcionando");
  }

}
