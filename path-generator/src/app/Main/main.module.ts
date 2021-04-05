import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { AppComponentsModule } from '../Components/component.module';
import { HeaderComponent } from './Header/header.component';

const routes: Routes = [{
  path: '', component: MainComponent,
  children: [
    { path: 'path-generator', loadChildren: () => import('../../app/path-generator/path-generator.module').then(m => m.PathGeneratorModule) },
    { path: 'pixel-designer', loadChildren: () => import('../../app/pixel-designer/pixel-designer.module').then(m => m.PixelDesignerModule) },
    // Unexpected URL handling.
    { path: '', redirectTo: 'pixel-designer', pathMatch: 'full' },
    { path: '**', redirectTo: 'pixel-designer', pathMatch: 'full' }
  ]
}];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, RouterModule.forChild(routes), AppComponentsModule],
  declarations: [
    MainComponent,
    HeaderComponent,
  ]
})
export class MainModule { }
