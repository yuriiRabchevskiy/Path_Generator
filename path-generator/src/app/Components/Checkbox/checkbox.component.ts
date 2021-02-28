import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cb',
  styleUrls: ['./checkbox.component.scss'],
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CBComponent {
  @Output() onChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() label: string;
  private _checked: boolean = false;

  @Input() set checked(value: boolean) {
    if (value === this._checked) return;
    this._checked = value;
    this.onChange.emit(this.checked);
  }

  get checked(): boolean {
    return this._checked;
  }

  onClick() {
    this.checked = !this.checked;
  }
}
