import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{
  testo_casella:string=""
  testo_salvato:string="(ancora nulla)"
  testo_colore:string=""
  testo_porte:string=""

  constructor() {}

  onClick() {
    this.testo_salvato=this.testo_casella+" " +" "+this.testo_colore+" "+this.testo_porte

  }

}
