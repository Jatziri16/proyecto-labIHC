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

//Rutas en el navegador para cada componente
const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'}, //Esto va a ser lo primero que se mostrará cuando no haya nada cargado
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'perfil', component: PerfilUserComponent},
  {path: 'menu', component: MenuComponent},
  {path:'**', redirectTo: 'login', pathMatch: 'full'} //Si se ingresa un complemento de liga esta redirecciona a la indicada
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    PerfilUserComponent,
    NavbarComponent
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

    MatFormFieldModule,
    MatInputModule, 
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
