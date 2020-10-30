import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArtisteComponent } from './artiste/artiste.component';
import { MorceauComponent } from './morceau/morceau.component';
import { ArbitreComponent } from './arbitre/arbitre.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { UtilisateurParametresComponent } from './utilisateur-parametres/utilisateur-parametres.component';
import { MorceauInfosComponent } from './morceau-infos/morceau-infos.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtisteComponent,
    MorceauComponent,
    ArbitreComponent,
    UtilisateurComponent,
    UtilisateurParametresComponent,
    MorceauInfosComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [PlayerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
