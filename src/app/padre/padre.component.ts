import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {

    constructor(
      private _servicioFamiliar: ServicioFamiliarService
    ) { }

  nombre?: string;
  fecha?: Date = new Date();
  dolar?: number = 0.95;
  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('Juan');
    this.nombre = this._servicioFamiliar.getHermanoGrande();
  }

  saludar() {
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeno() || '');
  }

  pregunar() {
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }

  valorContador: number = 0;
  /* mensajePadre :string = 'Mensaje desde el Padre'; */
/* 
  reciboMensaje: string = '';
  recibirMensaje($event: string) {
    this.reciboMensaje = $event;
  }

  
  incrementar() {
    this.valorContador++;
  }

  disminuir() {
    this.valorContador--;
  } */
}
