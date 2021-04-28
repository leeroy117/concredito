import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promoters',
  templateUrl: './promoters.component.html',
  styleUrls: ['./promoters.component.css']
})
export class PromotersComponent {
  toggledValue = true;
  title = 'frontend';

  // La funcion toggled recibe el evento como parametro
  toggled($event) {
    // Se cambia el valor del toggled en el padre, al valor emitido por el hijo
    this.toggledValue = $event;
  }
}
