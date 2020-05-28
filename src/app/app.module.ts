import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiModule, Configuration, ConfigurationParameters} from '../api';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { ArtistaComponent } from './pages/artista/artista.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PieComponent } from './pages/shared/pie/pie.component';


export function apiConfigSwagger(): Configuration{
  const params:ConfigurationParameters = {
    basePath:"http://localhost:3000",
    apiKeys:{["Authorization"]: ''}
  }
  return new Configuration(params);
}

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    HomeComponent,
    NavbarComponent,
    ArtistaComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule.forRoot(apiConfigSwagger),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
