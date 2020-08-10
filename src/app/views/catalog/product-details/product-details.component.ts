import { ProductDetailsService } from './../../../services/productDetails/product-details.service';
import { Component, OnInit } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { ProductDetails } from 'src/app/models/productDetails';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  descriptions: any[] = [];
  about: boolean;
  keyFeatures: boolean;
  careInstructions: boolean;
  sizeGuide: boolean;
  showBusyIndicator = false;
  prodDetailsTemp: any;
  prodDetailsMain: any;
  roleArray: ProductDetails[];
  temp: ProductDetails[];
  images: any[] = [];

  constructor(
    private productDetailsService: ProductDetailsService
  ) { }

  ngOnInit(): void {
    this.loadFeatures();
    this.loadTshirts();
  }

  loadFeatures() {
    this.descriptions = [
      {
        descTitle: 'About',
        // tslint:disable-next-line: max-line-length
        description: 'Comfortable and light, this premium fitted short sleeve is a classic choice. High quality print adds a statement to one\'s workout or everyday routine.'
      },
      {
        descTitle: 'Key Features',
        description: ''
      },
      {
        descTitle: 'Care Instructions',
        // tslint:disable-next-line: max-line-length
        description: 'Machine wash: cold (max 30C or 90F); Do not bleach; Tumble dry: low heat; Iron, steam or dry: low heat; Do not dryclean'
      },
      {
        descTitle: 'Size Guide',
        description: 'All measurements in the table refer to garment sizes.'
      }
    ];
  }

  loadTshirts() {
    this.images = [
      {
        imageSrc: '../../../../assets/Images/menCottonCrewTee.webp',
        description: 'Men\'s Cotton Crew Tee',
        price: 'From N2000'
      },
      {
        imageSrc: '../../../../assets/Images/unisexHeavy.webp',
        description: 'Unisex Heavy Cotton Tee',
        price: 'From N2000'
      },
      {
        imageSrc: '../../../../assets/Images/unisexJersey.webp',
        description: 'Unisex Jersey Short Sleeve Tee',
        price: 'From N2000'
      },
      {
        imageSrc: '../../../../assets/Images/menLightweight.webp',
        description: 'Men\'s Lightweight Fashion Tee',
        price: 'From N2000'
      }
    ];
  }

  loadPage() {
    this.showBusyIndicator = true;
    this.productDetailsService.getProductDetails().subscribe((res) => {
      this.prodDetailsTemp = plainToClass(ProductDetails, res);
      this.prodDetailsMain = this.prodDetailsTemp;
      console.log('productDetailsMain is: ', this.prodDetailsMain)

      this.roleArray = this.prodDetailsMain;
      this.temp = [];
      this.showBusyIndicator = false;
    });
  }

}
