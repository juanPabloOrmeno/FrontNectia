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
  }



  busqueda = async(termino: string)=>{
    let resp: any = await this.spotifyAppService.cargarBusqueda(termino);
    this.busquedas = resp.respuesta
  }


}
