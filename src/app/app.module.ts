import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MyResumeComponent } from './my-resume/my-resume.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material-module/material-module.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ParticlesModule } from 'angular-particle';
import { from } from 'rxjs';
import { ParticlesComponent } from './particles/particles.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
const appRoutes: Routes = [
  { path: 'resume', component: MyResumeComponent },
  { path: 'home', component: LandingPageComponent },
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MyResumeComponent,
    NavComponent,
    ParticlesComponent,
    ScrollSpyDirective
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'})
    , FormsModule
    , ReactiveFormsModule
    , HttpClientModule
    , NgbModule
    , MaterialModule
    , BrowserAnimationsModule
    , ParticlesModule
    , RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
