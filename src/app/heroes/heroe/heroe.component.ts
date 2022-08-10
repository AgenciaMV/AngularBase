import { Component } from '@angular/core';

@Component({
  selector: 'app-hereo',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'Ironman';
  edad: number = 45;
  nuevoNombre: string = 'Capitan America';
  nuevaEdad: number = 48;

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }
  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }
  cambiarNombre(): void {
    this.nombre = this.nuevoNombre;
  }
  cambiarEdad(): void {
    this.edad = this.nuevaEdad;
  }
}
