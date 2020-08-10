import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share-module/share.module';
import { ProductsComponent } from './products/products.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const appRoutes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'newArrivals', component: NewArrivalsComponent },
  { path: 'productDetails', component: ProductDetailsComponent }
];

@NgModule({
  declarations: [
    CatalogComponent,
    ProductsComponent,
    NewArrivalsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ShareModule.forRoot(),
    RouterModule.forChild(appRoutes)
  ]
})
export class CatalogModule { }
