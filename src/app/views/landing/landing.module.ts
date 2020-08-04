import { LandingComponent } from './landing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from 'angular-bootstrap-md';
import { ShareModule } from 'src/app/share-module/share.module';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    ShareModule
  ]
})
export class LandingModule { }
