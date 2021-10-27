/*
  En este servicio encontrarás las funciones de las 
  peticiones a la base de datos para traer la informacion
  del nivel actual de cada usuario 
*/

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class NivelesService 
{
  // 
  constructor(private firestore: AngularFirestore,
              private router: Router,) 
  { 
    // 
  }

  accesoDatos(acceso: string)
  {
    return this.firestore.collection('Usuarios', ref => ref.where('Usuario', '==', acceso)).get().toPromise();
  }
  actualizacionPuntaje(id: string, puntos: number)
  {
    console.log("Actualizando: "+puntos+" puntos")
      this.firestore.collection('Usuarios').doc(id).update({
      Puntaje: puntos,
    });
  }

  Nivel1()
  {
    // 
  }

  Nivel2()
  {
    // 
  }

  Nivel3()
  {
    // 
  }
}
