import { Component, OnInit } from '@angular/core';
import { SpotifyAppService } from '../../services/spotify-app.service'

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.less']
})
export class BuscarComponent implements OnInit {

  busquedas: any;

  constructor(private spotifyAppService: SpotifyAppService) { }

  async ngOnInit() {
    let resp: any = await this.spotifyAppService.cargarBusqueda();
    this.busquedas = resp.respuesta

    console.log(resp)
  }

}
