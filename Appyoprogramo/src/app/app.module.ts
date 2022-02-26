import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogosproyectoComponent } from './components/logosproyecto/logosproyecto.component';
import { ComunicacionComponent } from './components/comunicacion/comunicacion.component';
import { BannerComponent } from './components/banner/banner.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogosproyectoComponent,
    ComunicacionComponent,
    BannerComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
