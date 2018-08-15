import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contatos ANGULAR 6';

  mainLocal: string;
  mainSession: string;
  eventoLocal: string;
  eventoSession: string;

  ngOnInit() {
    this.mainLocal = localStorage.getItem('mainLocal');
    this.mainSession = sessionStorage.getItem('mainSession');
    this.eventoLocal = localStorage.getItem('eventoLocal');
    this.eventoSession = sessionStorage.getItem('eventoSession');
    localStorage.setItem('contatoLocal', 'Mensagem do evento localstorage !!!');
    sessionStorage.setItem(
      'contatoSession',
      'Mensagem do evento Session Storage !!!'
    );
  }
}
