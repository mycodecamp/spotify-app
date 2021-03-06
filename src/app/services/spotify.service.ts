import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import  { Artist } from '../artist';

@Injectable()

export class SpotifyService {

  private searchUrl:string;
  private artistUrl:string;
  private albumsUrl:string;
  private albumUrl:string;

  constructor(private _http:Http) { }

  searchMusic(str:string, type = "artist"){
  	
  	this.searchUrl='https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
  	
  	return this._http.get(this.searchUrl)
  			.map(res => res.json());
  }

  getArtist(id:string){
  	this.artistUrl='https://api.spotify.com/v1/artists/'+id;

  	return this._http.get(this.artistUrl)
  				.map(res => res.json());

  }

  getAlbum(id:string){
  	this.albumsUrl='https://api.spotify.com/v1/artists/'+id+'/albums';

  	return this._http.get(this.albumsUrl)
  				.map(res => res.json());

  }

  getOneAlbum(alid:string){
  	this.albumUrl='https://api.spotify.com/v1/albums/'+alid;

  	return this._http.get(this.albumUrl)
  				.map(res => res.json());

  }


}
