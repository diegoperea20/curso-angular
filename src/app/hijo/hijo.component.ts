import { Component, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent {
  /*  //mensaje que recibe del padre
  @Input() recibeHijo: string = ''; */

  @Output() mensajeDesdeHijo = new EventEmitter<string>();
  @Output() incrementoDesdeHijo = new EventEmitter<void>();
  @Output() decrementoDesdeHijo = new EventEmitter<void>();
  mensaje: string = '';
  enviarMensaje() {
    this.mensajeDesdeHijo.emit(this.mensaje);
  }


  incrementar() {
    this.incrementoDesdeHijo.emit();
  }

  disminuir() {
    this.decrementoDesdeHijo.emit();
  }
}
