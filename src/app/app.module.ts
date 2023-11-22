import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaComParamentrosComponent } from './pagina-com-paramentros/pagina-com-paramentros.component';
import { PaginaProtegidaComponent } from './pagina-protegida/pagina-protegida.component';
import { LoginComponent } from './login/loginComponent';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SegundaPaginaComponent,
    PaginaNaoEncontradaComponent,
    PaginaComParamentrosComponent,
    PaginaProtegidaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule /* Para usar o [(ngModel)] é necessário este import */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
