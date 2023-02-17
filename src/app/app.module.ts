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
import {RouterLink, RouterOutlet, Routes} from "@angular/router";
import { RouterModule } from "@angular/router";
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { SchtroumpfComponent } from './schtroumpfs/schtroumpf/schtroumpf.component';
import { SchtroumpfListComponent } from './schtroumpfs/schtroumpf-list/schtroumpf-list.component';
import { SchtroumpfFormComponent } from './schtroumpfs/schtroumpf-form/schtroumpf-form.component';
import { SchtroumpfService } from "../services/schtroumpf.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    routingComponents,
    SchtroumpfComponent,
    SchtroumpfListComponent,
    SchtroumpfFormComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    MatIconModule,
    RouterLink,
    RouterOutlet,
    HttpClientModule
  ],
  providers: [SchtroumpfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
