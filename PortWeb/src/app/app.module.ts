import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {HttpClientModule} from'@angular/common/http';
import { AptitudesyvaloracionesComponent } from './components/aptitudesyvaloraciones/aptitudesyvaloraciones.component';
import { LogrosComponent } from './components/logros/logros.component';
import { EducationComponent } from './components/education/education.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    LogoAPComponent,
    AppComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    AptitudesyvaloracionesComponent,
    LogrosComponent,
    EducationComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
