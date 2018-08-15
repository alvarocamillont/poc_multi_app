import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'main-app';

  ngOnInit() {
    localStorage.setItem('main', 'Gravado pela MAIN PAGE');
  }
}
