import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* 
export class AppComponent {
  title = 'Excercise';
  num = '#2'

  mari!: Employee;
  constructor() {
    this.mari = {
    name: "Pere Mária",
    city: "Szeged",
    salary: 300
  }
  }
}

// Interface
interface Employee {
  name: string,
  city: string,
  salary: number
}
*/

export class AppComponent {
  title = 'Excercise';
  num = '#1'

  dolgozo = [
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

