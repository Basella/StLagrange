import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDetails } from 'src/app/models/productDetails';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService extends BaseService {
  controllerName = 'productDetails';

  constructor(http: HttpClient) {
    super(http);
  }

  getProductDetails(): Observable<Array<ProductDetails>> {
    return this.http.get<Array<ProductDetails>>(
      this.getFullUrl() + `getProductDetails`
    );
  }
}
