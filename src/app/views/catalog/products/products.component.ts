import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  allProducts: boolean;
  men: boolean;
  women: boolean;
  images: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages() {
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
      },
      {
        imageSrc: '../../../../assets/Images/menShortSleeve.webp',
        description: 'Men\'s Short Sleeve Tee',
        price: 'From N2000'
      },
      {
        imageSrc: '../../../../assets/Images/unisexUltraCottonTee.webp',
        description: 'Unisex Ultra Cotton Tee',
        price: 'From N2000'
      }
    ];
  }

  isAllProdClicked() {
    this.allProducts = true;
    this.men = false;
    this.women = false;
  }

  isMenClicked() {
    this.allProducts = false;
    this.men = true;
    this.women = false;
  }

  isWomenClicked() {
    this.allProducts = false;
    this.men = false;
    this.women = true;
  }

}
