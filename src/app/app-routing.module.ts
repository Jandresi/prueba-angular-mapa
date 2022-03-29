import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'login', loadChildren: () => import('./components/user/login/login.module').then(m => m.LoginModule) }, { path: 'map', loadChildren: () => import('./components/map/map.module').then(m => m.MapModule) },
  {path: 'map2', component: MapComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
