import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent {

  toggledValue = true;

  // La funcion toggled recibe el evento como parametro
  toggled($event) {
    // Se cambia el valor del toggled en el padre, al valor emitido por el hijo
    this.toggledValue = $event;
  }
}
