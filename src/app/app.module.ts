import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// MODULOS
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// COMPONENTES
import { LoginComponent } from './Components/login/login.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { MenuComponent } from './Components/menu/menu.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

// Angular Material 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Nivel1Component } from './Components/nivel1/nivel1.component';
import { N1Punto1Component } from './Components/n1-punto1/n1-punto1.component';
import { N1Punto2Component } from './Components/n1-punto2/n1-punto2.component';
import { N1Punto3Component } from './Components/n1-punto3/n1-punto3.component';

//COOKIES
import { CookieService } from 'ngx-cookie-service';
import { N1Punto4Component } from './Components/n1-punto4/n1-punto4.component';
import { N1Punto5Component } from './Components/n1-punto5/n1-punto5.component';
import { N1Punto6Component } from './Components/n1-punto6/n1-punto6.component';
import { N1Punto7Component } from './Components/n1-punto7/n1-punto7.component';
import { N1Punto8Component } from './Components/n1-punto8/n1-punto8.component';

//Rutas en el navegador para cada componente
const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'}, //Esto va a ser lo primero que se mostrará cuando no haya nada cargado
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'level1', component: Nivel1Component},
  {path: 'L1P1', component: N1Punto1Component},
  {path: 'L1P2', component: N1Punto2Component},
  {path: 'L1P3', component: N1Punto3Component},
  {path: 'L1P4', component: N1Punto4Component},
  {path: 'L1P5', component: N1Punto5Component},
  {path: 'L1P6', component: N1Punto6Component},
  {path: 'L1P7', component: N1Punto7Component},
  {path: 'L1P8', component: N1Punto8Component},
  {path:'**', redirectTo: 'login', pathMatch: 'full'} //Si se ingresa un complemento de liga esta redirecciona a la indicada
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    NavbarComponent,
    Nivel1Component,
    N1Punto2Component,
    N1Punto3Component,
    N1Punto1Component,
    N1Punto4Component,
    N1Punto5Component,
    N1Punto6Component,
    N1Punto7Component,
    N1Punto8Component
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule, 
    MatSelectModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
