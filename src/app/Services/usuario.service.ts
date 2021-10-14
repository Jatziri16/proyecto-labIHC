import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService 
{
  registro: any;
  id!: string;
  USER!: string;
  constructor(private firestore: AngularFirestore) 
  { 
    // 
  }
  
  Login(usuario: string)
  {
    return this.firestore.collection('Usuarios', ref => ref.where('Usuario', '==', usuario)).get().toPromise();
  }

  EmailUser(correo: string)
  {
    return this.firestore.collection('Usuarios', ref => ref.where('Correo', '==', correo)).get().toPromise();
  }

  NomUser(usuario: string)
  {
    return this.firestore.collection('Usuarios', ref => ref.where('Usuario', '==', usuario)).get().toPromise();
  }

  // Guarda el nombre de usuario para más adelante poder tener acceso a su id
  GuardaNomUser(usuario: string)
  {
    this.USER = usuario;
  }

  registarUsuario(nombre:string, apellido:string, usuario:string, correo:string, contra:string): Promise<any>
  {
    this.USER = usuario;
    this.registro = this.firestore.collection('Usuarios').add({
      Nombre: nombre,
      Apellido: apellido,
      Usuario: usuario,
      Correo: correo,
      Contrasenia: contra,
      Puntaje: 0,
    })
    .then(docRef => { 
      this.id = docRef.id;
        this.agregarID(this.id);
        // console.log("Document written with ID: ", docRef.id);
    })
    .catch(error => console.error("Error adding document: ", error))
    
    return this.registro;   //this.firestore.collection('Usuarios').add(usuario);
  }

  agregarID(id:string)
  {
    // console.log("Se está agregando el id");
    this.firestore.collection('Usuarios').doc(id).update({
      ID: id,
    });
  }
}
