import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ActionTypes } from 'src/app/helpers/general';

@Component({
  selector: 'app-button',
  styleUrls: ['./button.component.scss'],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ButtonComponent {
  @Output() onClick: EventEmitter<ActionTypes> = new EventEmitter<ActionTypes>();
  @Input() label: string;
  @Input() actionType: ActionTypes;
  private _active: boolean = false;

  @Input() set active(value: boolean) {
    if (value === this._active) return;
    this._active = value;
  }

  get active(): boolean {
    return this._active;
  }

  onActiveType() {
    if (this.active) {
      this.onClick.emit(undefined);
      return;
    }
    this.onClick.emit(this.actionType);
  }
}
