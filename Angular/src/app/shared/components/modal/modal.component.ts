import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {

  @Input() titleModal = '';
  @Input() idModal = '';
  @Output() btnChangeShiny: EventEmitter<any> = new EventEmitter();


}
