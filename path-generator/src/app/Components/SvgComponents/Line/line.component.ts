import { Component, Input } from '@angular/core';
import { ILine } from 'src/app/helpers/Line';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'g[app-line]',
  templateUrl: 'line.component.html',
  styleUrls: ['./line.component.scss'],
})
export class LineComponent {
  @Input() item: ILine;
}
