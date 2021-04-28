import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // Toggled en true para que el sidebar se muestra
  toggledValue = true;

  // Creando una propiedad de tipo EventEmitter para emitir un evento al padre
  @Output() toggledChange = new EventEmitter<boolean>();

  toggled() {
    // Cambia el valor actual del toggled
    this.toggledValue = !this.toggledValue;

    // Emite el valor del toggled al padre
    this.toggledChange.emit(this.toggledValue);
  }
}
