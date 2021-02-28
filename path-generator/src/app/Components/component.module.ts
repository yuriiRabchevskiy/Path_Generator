import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawComponent } from './DrawComponent/draw.component';
import { ToolbarComponent } from './Toolbar/toolbar.component';
import { CBComponent } from './Checkbox/checkbox.component';
import { SvgComponentsModule } from './SvgComponents/svg.module';

@NgModule({
  imports: [CommonModule, SvgComponentsModule],
  declarations: [DrawComponent, ToolbarComponent, CBComponent],
  exports: [DrawComponent, ToolbarComponent, CBComponent],
})
export class AppComponentsModule { }
