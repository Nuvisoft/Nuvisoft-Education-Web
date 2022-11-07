import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { JobsCreatorComponent } from './pages/jobs-creator/jobs-creator.component';
import { JobPaperComponent } from './components/job-paper/job-paper.component';
import { ItemProfileComponent } from './components/item-profile/item-profile.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { QuestionComponent } from './components/question/question.component';
import { IconComponent } from './components/icon/icon.component';
import { AdminPaymentsComponent } from './pages/children-pages/admin-payments/admin-payments.component';
import { AdminSchoolComponent } from './pages/children-pages/admin-school/admin-school.component';
import { AdminClassesComponent } from './pages/children-pages/admin-classes/admin-classes.component';
import { AdminMembershipComponent } from './pages/children-pages/admin-membership/admin-membership.component';
import { HighligthDirective } from './directives/highligth.directive';
import { StudentsComponent } from './pages/students/students.component';
import { StoreModule } from '@ngrx/store';
import { NavigationComponent } from './pages/children-pages/navigation/navigation.component';
import { ClassesPanelComponent } from './components/child-components/classes-panel/classes-panel.component';
import { ListContainerComponent } from './components/list-container/list-container.component';
import { DescriptionComponent } from './components/description/description.component';
import { TeachersPanelComponent } from './components/child-components/teachers-panel/teachers-panel.component';
import { StudentsPanelComponent } from './components/child-components/students-panel/students-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdministrationComponent,
    LoginComponent,
    HeaderComponent,
    ProfileComponent,
    NavigationMenuComponent,
    SidebarComponent,
    JobsCreatorComponent,
    JobPaperComponent,
    ItemProfileComponent,
    QuestionComponent,
    IconComponent,
    AdminPaymentsComponent,
    AdminSchoolComponent,
    AdminClassesComponent,
    AdminMembershipComponent,
    HighligthDirective,
    StudentsComponent,
    NavigationComponent,
    ClassesPanelComponent,
    ListContainerComponent,
    DescriptionComponent,
    TeachersPanelComponent,
    StudentsPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DragDropModule,
    FormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
