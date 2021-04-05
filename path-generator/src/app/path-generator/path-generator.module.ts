import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponentsModule } from '../Components/component.module';
import { PathGeneratorComponent } from './path-generator.component';

const routes: Routes = [{
  path: '', component: PathGeneratorComponent,
}];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, RouterModule.forChild(routes), AppComponentsModule],
  declarations: [
    PathGeneratorComponent
  ]
})
export class PathGeneratorModule { }
