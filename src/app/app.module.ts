import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiModule, Configuration, ConfigurationParameters} from '../api';
import { BuscarComponent } from './pages/buscar/buscar.component';


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
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
