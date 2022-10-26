import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Excercise';
  num = '#2'

/* Exercise #2 */
// Object 
  mari!: Employee;
  kati: Employee = {
    name: "Pere Kata",
    city: "Szeged",
    salary: 300
  }

  // Variables for the img element:
  path: string = '../assets/images/forest.jpg'
  alt: string = 'Image of a Forest'

katt():void {
  alert("It works!");
}


/* Exercise #1 */
/*
// Object, Constructor
  mari!: Employee;
  constructor() {
    this.mari = {
    name: "Pere Mária",
    city: "Szeged",
    salary: 300
  }
  }*/
}

/* Exercise #2 */
// Interface
interface Employee {
  name: string,
  city: string,
  salary: number
}


/* Exercise #1 */
/* 
// Array
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
*/
