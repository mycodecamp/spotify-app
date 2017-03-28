import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';
import  { Artist } from '../../artist';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchRes:Artist[];
  searchStr:string;

  constructor(private _spotifyService:SpotifyService) { }

  searchMusic(){

  	this._spotifyService.searchMusic(this.searchStr)
  		.subscribe(res => {
  			this.searchRes = res.artists.items;
  			console.log(this.searchRes);
  		});
  }

  ngOnInit() {
  }

}
