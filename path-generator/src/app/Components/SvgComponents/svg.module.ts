import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './Line/line.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LineComponent],
  exports: [LineComponent],
})
export class SvgComponentsModule { }
