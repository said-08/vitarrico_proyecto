import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTING } from './app.routes'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Pages/home/home.component';
import { LogInComponent } from './Pages/log-in/log-in.component';
import { NavbarComponent } from './Componentes/Shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductoComponent } from "./producto/producto.component"; 



import { MaterialModule } from './material.module';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { SidebarComponent } from './slider/slider.component';
import { ProveedoresComponent } from './proveedores/proveedores.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    NavbarComponent,
    ContactUsComponent,
    SidebarComponent,
    ProveedoresComponent,
    ProductoComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
