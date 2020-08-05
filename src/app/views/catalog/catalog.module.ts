import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share-module/share.module';
import { ProductsComponent } from './products/products.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';

export const appRoutes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'catalog/products', component: ProductsComponent },
  { path: 'catalog/newArrivals', component: NewArrivalsComponent }
];

@NgModule({
  declarations: [
    CatalogComponent,
    ProductsComponent,
    NewArrivalsComponent
  ],
  imports: [
    CommonModule,
    ShareModule.forRoot(),
    RouterModule.forChild(appRoutes)
  ]
})
export class CatalogModule { }
