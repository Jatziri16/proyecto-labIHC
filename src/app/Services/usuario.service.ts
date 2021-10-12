import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService 
{
  // 
  constructor(private firestore: AngularFirestore) 
  { 
    // 
  }
  Login(usuario: string)
  {
    return this.firestore.collection('Usuarios', ref => ref.where('Usuario', '==', usuario)).get().toPromise();
  }
}
