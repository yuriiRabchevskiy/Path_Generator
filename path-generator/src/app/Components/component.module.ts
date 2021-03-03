import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawComponent } from './DrawComponent/draw.component';
import { ToolbarComponent } from './Toolbar/toolbar.component';
import { CBComponent } from './Checkbox/checkbox.component';
import { SvgComponentsModule } from './SvgComponents/svg.module';
import { ButtonComponent } from './Button/button.component';
import { PathModalComponent } from './PathModal/path-modal.component';

@NgModule({
  imports: [CommonModule, SvgComponentsModule],
  declarations: [DrawComponent, ToolbarComponent, CBComponent, ButtonComponent, PathModalComponent],
  exports: [DrawComponent, ToolbarComponent, CBComponent, ButtonComponent, PathModalComponent],
})
export class AppComponentsModule { }
