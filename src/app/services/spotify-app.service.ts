import { Injectable } from '@angular/core';
import { SpotifyService } from '../../api/api/api'

@Injectable({
  providedIn: 'root'
})
export class SpotifyAppService {

  constructor(private spotifyService : SpotifyService) { }


  async cargarUsuarios(){
    let nuevos = await this.spotifyService.nuevoGet().toPromise();
    return nuevos
  }


  async cargarBusqueda(){
    let busqueda = await this.spotifyService.buscarGet().toPromise();
    return busqueda
  }


}
