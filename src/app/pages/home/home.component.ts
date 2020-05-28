import { Component, OnInit } from '@angular/core';
import { SpotifyAppService } from '../../services/spotify-app.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private spotifyAppService: SpotifyAppService) { }

  async ngOnInit() {


    let resp: any = await this.spotifyAppService.cargasNuevos();


    console.log(resp)
  }

}
