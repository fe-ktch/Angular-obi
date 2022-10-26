import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'obi';

  doglozo = [
    {
    name: 'Pali Márton',
    city: 'Szeged',
    salary: 385
    },
    {
    name: 'Para Béla',
    city: 'Szolnok',
    salary: 342
    }
  ]
}
