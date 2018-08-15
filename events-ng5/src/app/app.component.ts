import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Eventos no ANGULAR 5!';
  mainLocal: string;
  mainSession: string;
  contatoLocal: string;
  contatoSession: string;

  ngOnInit() {
    this.mainLocal = localStorage.getItem('mainLocal');
    this.mainSession = sessionStorage.getItem('mainSession');
    this.contatoLocal = localStorage.getItem('contatoLocal');
    this.contatoSession = sessionStorage.getItem('contatoSession');
    localStorage.setItem('eventoLocal', 'Mensagem do evento localstorage !!!');
    sessionStorage.setItem(
      'eventoSession',
      'Mensagem do evento Session Storage !!!'
    );
  }
}
