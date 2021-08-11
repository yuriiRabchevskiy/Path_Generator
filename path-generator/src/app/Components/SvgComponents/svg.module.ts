import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './Line/line.component';
import { PointComponent } from './Point/point.component';
import { PathComponent } from './Path/path.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LineComponent, PointComponent, PathComponent],
  exports: [LineComponent, PointComponent, PathComponent],
})
export class SvgComponentsModule { }
