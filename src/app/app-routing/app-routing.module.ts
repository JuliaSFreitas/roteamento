import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiraPaginaComponent } from '../primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from '../segunda-pagina/segunda-pagina.component';
import { PaginaNaoEncontradaComponent } from '../pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaComParamentrosComponent } from '../pagina-com-paramentros/pagina-com-paramentros.component';
import { PaginaProtegidaComponent } from '../pagina-protegida/pagina-protegida.component';
import { authGuard } from '../auth.guard';
import { LoginComponent } from '../login/loginComponent';

const routes: Routes = [
  { path: "primeira-pagina", component: PrimeiraPaginaComponent },
  { path: "segunda-pagina", component: SegundaPaginaComponent},
  { path: "pagina-com-parametro/:id", component: PaginaComParamentrosComponent },
  { path: 'lazy-loading', loadChildren: () => import('../lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
  { path: "pagina-protegida", component: PaginaProtegidaComponent, canActivate: [authGuard]},
  { path: "login", component: LoginComponent},
  { path: "", redirectTo: "primeira-pagina", pathMatch: "full"}, /* direcionar para a primeira página quando não passar parametro */
  { path: "**", component: PaginaNaoEncontradaComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
