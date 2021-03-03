import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './Line/line.component';
import { PointComponent } from './Point/point.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LineComponent, PointComponent],
  exports: [LineComponent, PointComponent],
})
export class SvgComponentsModule { }
