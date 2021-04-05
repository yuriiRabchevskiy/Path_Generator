import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponentsModule } from '../Components/component.module';
import { PixelDesignerComponent } from './pixel-designer.components';

const routes: Routes = [{
  path: '', component: PixelDesignerComponent,
}];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, RouterModule.forChild(routes), AppComponentsModule],
  declarations: [
    PixelDesignerComponent
  ]
})
export class PixelDesignerModule { }
