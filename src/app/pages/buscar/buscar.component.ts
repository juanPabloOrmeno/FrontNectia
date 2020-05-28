import { Component, OnInit } from '@angular/core';
import { SpotifyAppService } from '../../services/spotify-app.service'


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.less']
})
export class BuscarComponent implements OnInit {

  busquedas: any;
  public loading = false;

  constructor(private spotifyAppService: SpotifyAppService) { }

  async ngOnInit() {
  }



  busqueda = async (termino: string) => {
    try {
      this.loading = true;
      let resp: any = await this.spotifyAppService.cargarBusqueda(termino);
      this.loading = false;
      this.busquedas = resp.respuesta
    } catch (err) {
      this.loading = false;
      console.log(err)
    }

  }


}
