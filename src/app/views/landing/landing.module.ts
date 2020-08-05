import { LandingComponent } from './landing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsModule } from 'angular-bootstrap-md';
import { ShareModule } from 'src/app/share-module/share.module';

export const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: LandingComponent }
];

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    ShareModule.forRoot(),
    RouterModule.forChild(appRoutes)
  ]
})
export class LandingModule { }
