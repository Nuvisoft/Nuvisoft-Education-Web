import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './pages/administration/administration.component';
import { HomeComponent } from './pages/home/home.component';
import { JobsCreatorComponent } from './pages/jobs-creator/jobs-creator.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [{ path: 'administration', component: AdministrationComponent }],
  },
  { path: 'login', component: LoginComponent },
  { path: 'creator', component: JobsCreatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
