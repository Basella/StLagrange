import { MainPageComponent } from './main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appRoutesLazyLoad } from './lazy-load.route';
import { ShareModule } from 'src/app/share-module/share.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutesLazyLoad),
    ShareModule
  ]
})
export class MainPageModule { }
