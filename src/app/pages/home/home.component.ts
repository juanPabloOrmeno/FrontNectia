import { Component, OnInit } from '@angular/core';
import { SpotifyAppService } from '../../services/spotify-app.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  nuevos: any;

  constructor(private spotifyAppService: SpotifyAppService) { }

  async ngOnInit() {


    let resp: any = await this.spotifyAppService.cargasNuevos();
    this.nuevos = resp.respuesta

    console.log(resp)
  }

}
