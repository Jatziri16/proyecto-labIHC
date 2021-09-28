import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENTES
import { LoginComponent } from './Components/login/login.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { MenuComponent } from './Components/menu/menu.component';
import { PerfilUserComponent } from './Components/perfil-user/perfil-user.component';

//Rutas en el navegador para cada componente
const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'}, //Esto va a ser lo primero que se mostrará cuando no haya nada cargado
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'perfil', component: PerfilUserComponent},
  {path:'**', redirectTo: 'login', pathMatch: 'full'} //Si se ingresa un complemento de liga esta redirecciona a la indicada
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    PerfilUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
