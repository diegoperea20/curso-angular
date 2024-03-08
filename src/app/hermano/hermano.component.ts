import { Component } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css']
})
export class HermanoComponent {
  constructor(
    private _servicioFamiliar: ServicioFamiliarService
  ) { }

  nombre?: string;
  ngOnInit(): void {
    this._servicioFamiliar.setHermanoPequeno('Pedro');
    this.nombre = this._servicioFamiliar.getHermanoPequeno();
  }


  saludar() {
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoGrande() || '');
  }

  pregunar() {
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }
  
}
