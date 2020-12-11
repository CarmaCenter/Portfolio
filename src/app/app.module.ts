import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/Http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EducationComponent } from './components/education/education.component';
import { ReferencesComponent } from './components/references/references.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BtnGoToTopComponent } from './components/btn-go-to-top/btn-go-to-top.component';
import { BtnToTopComponent } from './components/btn-to-top/btn-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    SkillsComponent,
    PortfolioComponent,
    EducationComponent,
    ReferencesComponent,
    BlogComponent,
    ContactComponent,
    NavbarComponent,
    BtnGoToTopComponent,
    BtnToTopComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,BrowserAnimationsModule,HttpClientModule],

providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
