import { Component, OnInit } from '@angular/core';
import {Artiste} from '../artiste';

@Component({
  selector: 'app-artiste',
  templateUrl: './artiste.component.html',
  styleUrls: ['./artiste.component.css']
})
export class ArtisteComponent implements OnInit {
artiste: Artiste = {
  id: 1
};
  constructor() { }

  ngOnInit() {
  }

}
