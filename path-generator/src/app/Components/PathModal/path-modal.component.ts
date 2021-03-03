import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IPoint } from 'src/app/helpers/general';

@Component({
  selector: 'app-path-modal',
  styleUrls: ['./path-modal.component.scss'],
  templateUrl: './path-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PathModalComponent {
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  valueAsString: string;
  private _value: IPoint[] = [];
  get value() {
    return this._value;
  }
  @Input() set value(val: IPoint[]) {
    let str = '';
    val.forEach(it => {
      str += `{ x: ${it.x}, y: ${it.y} },`;
    });
    this.valueAsString = str;
    this._value = val;
  }

  onClick() {
    this.onClose.emit(false);
  }
}
