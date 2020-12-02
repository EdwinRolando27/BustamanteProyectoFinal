import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './vistas/login/login.component';
import{LUsuarioComponent} from './vistas/l-usuario/l-usuario.component';
import{CUsuarioComponent} from './vistas/c-usuario/c-usuario.component';
import{AUsuarioComponent} from './vistas/a-usuario/a-usuario.component';
import {DUsuarioComponent} from './vistas/d-usuario/d-usuario.component';
 
const routes: Routes = [
  {path:'' , redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'lusuarios',component:LUsuarioComponent},
  {path:'cusuarios',component:CUsuarioComponent},
  {path:'ausuarios',component:AUsuarioComponent},
  {path:'dusuarios',component:DUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,LUsuarioComponent,CUsuarioComponent,AUsuarioComponent,DUsuarioComponent]
