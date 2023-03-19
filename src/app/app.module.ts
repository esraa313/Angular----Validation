import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './details/details.component';
import { ErrorsComponent } from './errors/errors.component';
 
const routes:Routes = [
  {path:'',component:RegistrationComponent},
  {path:'UserRegistration',component:RegistrationComponent},
  {path:'users/:id',component:DetailsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'**',component:ErrorsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ProfileComponent,
    DetailsComponent,
    ErrorsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
