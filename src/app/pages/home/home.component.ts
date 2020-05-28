import { Component, OnInit } from '@angular/core';
import { SpotifyAppService } from '../../services/spotify-app.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  nuevos: any;
  public loading = false;

  constructor(private spotifyAppService: SpotifyAppService) { }

  async ngOnInit() {


    try {

      this.loading = true;
      let resp: any = await this.spotifyAppService.cargasNuevos();
      this.nuevos = resp.respuesta
      this.loading = false;

    } catch (err) {
      this.loading = false;
      console.log(err)
    }

  }

}
