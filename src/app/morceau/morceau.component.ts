import { Component, OnInit } from '@angular/core';
import { Morceau} from '../morceau';

@Component({
  selector: 'app-morceau',
  templateUrl: './morceau.component.html',
  styleUrls: ['./morceau.component.css']
})
export class MorceauComponent implements OnInit {
morceau: Morceau= {
  id: 1,
  name: 'premier morceau'
  };
  constructor() { }

  ngOnInit() {
  }

}
