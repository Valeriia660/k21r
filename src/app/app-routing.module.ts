import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AdGuard } from './ad.guard';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'login', component: LoginComponent},
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminComponent, canActivate: [AdGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
