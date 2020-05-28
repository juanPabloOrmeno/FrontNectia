import { Injectable } from '@angular/core';
import { SpotifyService } from '../../api/api/api'

@Injectable({
  providedIn: 'root'
})
export class SpotifyAppService {

  constructor(private spotifyService : SpotifyService) { }


  async cargasNuevos(){
    let nuevos = await this.spotifyService.spotifyNuevoGet().toPromise()
    return nuevos
  }


  async cargarBusqueda(){
    let busqueda = await this.spotifyService.spotifyBuscarGet().toPromise();
    return busqueda
  }


}
