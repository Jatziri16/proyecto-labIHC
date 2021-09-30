import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) 
  { 
    this.items = firestore.collection('Usuarios').valueChanges();
  }

  ngOnInit(): void {
  }

}
