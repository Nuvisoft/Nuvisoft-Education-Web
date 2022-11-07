import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from '../pages/administration/administration.component';
import { AdminClassesComponent } from '../pages/children-pages/admin-classes/admin-classes.component';
import { AdminMembershipComponent } from '../pages/children-pages/admin-membership/admin-membership.component';
import { AdminPaymentsComponent } from '../pages/children-pages/admin-payments/admin-payments.component';
import { AdminSchoolComponent } from '../pages/children-pages/admin-school/admin-school.component';
import { ClassesPanelComponent } from '../components/child-components/classes-panel/classes-panel.component';
import { HomeComponent } from '../pages/home/home.component';
import { JobsCreatorComponent } from '../pages/jobs-creator/jobs-creator.component';
import { LoginComponent } from '../pages/login/login.component';

const routes: Routes = [
  {
    path: 'administration',
    component: AdministrationComponent,
    children: [
      { path: 'payments', component: AdminPaymentsComponent },
      {
        path: 'school',
        component: AdminSchoolComponent,
        children: [
          { path: 'classes', component: ClassesPanelComponent },
          { path: 'teachers', component: ClassesPanelComponent },
          { path: 'students', component: ClassesPanelComponent },
          { path: 'timetable', component: ClassesPanelComponent },
          { path: 'statistics', component: ClassesPanelComponent },
        ],
      },
      { path: 'membership', component: AdminMembershipComponent },
      { path: 'classes', component: AdminClassesComponent },
    ],
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'creator', component: JobsCreatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
