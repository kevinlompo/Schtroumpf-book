import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './pages/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import { RegisterComponent } from './pages/register/register.component';
import {RouterLink, Routes} from "@angular/router";
import { RouterModule } from "@angular/router";
import {SchtroumpfComponent} from "./schtroumpfs/schtroumpf/schtroumpf.component";
import {SchtroumpfFormComponent} from "./schtroumpfs/schtroumpf-form/schtroumpf-form.component";
import {SchtroumpfListComponent} from "./schtroumpfs/schtroumpf-list/schtroumpf-list.component";

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

export const routingComponents = [HomeComponent, LoginComponent, RegisterComponent];
