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
import { PerfilUserComponent } from './Components/perfil-user/perfil-user.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

// Angular Material 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Nivel1Component } from './Components/nivel1/nivel1.component';
import { Nivel2Component } from './Components/nivel2/nivel2.component';
import { Nivel3Component } from './Components/nivel3/nivel3.component';
import { N1Punto1Component } from './Components/n1-punto1/n1-punto1.component';
import { N1Punto2Component } from './Components/n1-punto2/n1-punto2.component';
import { N1Punto3Component } from './Components/n1-punto3/n1-punto3.component';

//COOKIES
import { CookieService } from 'ngx-cookie-service';

//Rutas en el navegador para cada componente
const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'}, //Esto va a ser lo primero que se mostrará cuando no haya nada cargado
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'perfil', component: PerfilUserComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'level1', component: Nivel1Component},
  {path: 'level2', component: Nivel2Component},
  {path: 'level3', component: Nivel3Component},
  {path: 'L1P1', component: N1Punto1Component},
  {path: 'L1P2', component: N1Punto2Component},
  {path: 'L1P3', component: N1Punto3Component},
  {path:'**', redirectTo: 'login', pathMatch: 'full'} //Si se ingresa un complemento de liga esta redirecciona a la indicada
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    PerfilUserComponent,
    NavbarComponent,
    Nivel1Component,
    Nivel2Component,
    Nivel3Component,
    N1Punto2Component,
    N1Punto3Component,
    N1Punto1Component
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
