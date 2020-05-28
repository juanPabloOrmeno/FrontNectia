import { TestBed } from '@angular/core/testing';

import { SpotifyAppService } from './spotify-app.service';

describe('SpotifyAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotifyAppService = TestBed.get(SpotifyAppService);
    expect(service).toBeTruthy();
  });
});
