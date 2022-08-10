import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>

    <input type="numero" />
    <button type="submit">Calcular</button>
    <br />
    <hr />

    <button (click)="calcular(base)">+{{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="calcular(-base)">-{{ base }}</button>
    <br />
    <hr />
    <button (click)="reset()">Resetear</button>
  `,
})
export class ContadorComponent {
  base = 5;
  titulo = 'Contador App';
  numero = 0;
  // sumar() {
  //   this.numero++;
  // }
  // restar() {
  //   this.numero--;
  // }

  calcular(valor: number) {
    this.numero += valor;
  }

  reset() {
    this.numero = 0;
  }
}
