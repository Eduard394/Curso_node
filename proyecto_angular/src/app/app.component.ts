import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hola';

  saludo = 'hola';

  contactos = [
    'Juan',
    'Samy',
    'Paula',
    'Tomy'
  ]
}
