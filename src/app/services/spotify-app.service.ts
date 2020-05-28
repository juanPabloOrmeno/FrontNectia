import { Injectable } from '@angular/core';
import { SpotifyService } from '../../api/api/api'

@Injectable({
  providedIn: 'root'
})
export class SpotifyAppService {

  constructor(private spotifyService : SpotifyService) { }


  cargasNuevos =  async() => await this.spotifyService.spotifyNuevoGet().toPromise()
  
  cargarBusqueda =  async(busqueda: string) => await this.spotifyService.spotifyBuscarGet(busqueda).toPromise();

}
