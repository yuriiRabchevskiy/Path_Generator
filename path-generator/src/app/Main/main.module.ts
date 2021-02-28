import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { AppComponentsModule } from '../Components/component.module';

const routes: Routes = [{
  path: '', component: MainComponent,
  // children: [
  //   { path: 'home', loadChildren: () => import('app/other-pages/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
  //   { path: 'manage', redirectTo: 'manage/home', pathMatch: 'full' },
  //   // Unexpected URL handling.
  //   { path: '', redirectTo: 'home', pathMatch: 'full' },
  //   { path: '**', redirectTo: 'home', pathMatch: 'full' }
  // ]
}];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, RouterModule.forChild(routes), AppComponentsModule],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
