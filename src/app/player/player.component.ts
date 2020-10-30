import {Component, OnInit} from '@angular/core';
import {Player} from '../player';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  player: Player = {
    url: '?url=https%3A//api.soundcloud.com/tracks/293&amp;',
    fullUrl: '',
    fix: 'https://w.soundcloud.com/player/',
  };

  fullUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.fullUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.player.fix + this.player.url);
  }

  ngOnInit() {
  }

}
