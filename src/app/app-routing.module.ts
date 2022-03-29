import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'login', loadChildren: () => import('./components/user/login/login.module').then(m => m.LoginModule) }, { path: 'map', loadChildren: () => import('./components/map/map.module').then(m => m.MapModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
