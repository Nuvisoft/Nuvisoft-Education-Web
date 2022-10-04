import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DragDropModule,
    FormsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
