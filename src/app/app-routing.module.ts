import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayeoutComponent } from './layoutes/default-layeout/default-layeout.component';
import { DEFAULT_ROUTES } from './routes/default-layout-routes';
import { BACKEND_ROUTES } from './routes/backend-layout-routes';
import { BackendLayeoutComponent } from './layoutes/backend-layeout/backend-layeout.component';

const routes: Routes = [
  {path:'',component:DefaultLayeoutComponent,children:DEFAULT_ROUTES},
  {path:'backend',component:BackendLayeoutComponent,children:BACKEND_ROUTES},
  {path:'**',redirectTo:'404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
