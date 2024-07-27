import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() title!: string;
  @Input() variant: string = '';
  @Input() cssClass: string = '';
  @Input() href!: string;
  @Input() isExternal!: boolean;
  @Output() whenClick = new EventEmitter<void>();

  emitEvent() {
    this.whenClick.emit();
  }
}
