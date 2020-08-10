import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss']
})
export class NewArrivalsComponent implements OnInit {
  allProducts: boolean;
  men: boolean;
  women: boolean;
  images: any[] = [];
  hoodies: any[] = [];
  longSleeves: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadTshirts();
    this.loadHoodies();
    this.loadLongSleeves();
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

  loadHoodies() {
    this.hoodies = [
      {
        imageSrc: '../../../../assets/Images/unisexHeavyBlendH.webp',
        description: 'Unisex Heavy Blend Full Zip',
        price: 'From N2000'
      },
      {
        imageSrc: '../../../../assets/Images/unisexHeavyBlendHoodie.webp',
        description: 'Unisex Heavy Blend Hooded',
        price: 'From N2000'
      },
      {
        imageSrc: '../../../../assets/Images/unisexFullZip.webp',
        description: 'Unisex Full Zipp Hoodie',
        price: 'From N2000'
      },
      {
        imageSrc: '../../../../assets/Images/unisexCollegeHoodie.webp',
        description: 'Unisex College Hoodie',
        price: 'From N2000'
      },
      {
        imageSrc: '../../../../assets/Images/menNublend.webp',
        description: 'Men\'s NuBLEND Hooded',
        price: 'From N2000'
      },
      {
        imageSrc: '../../../../assets/Images/unisexZipUp.webp',
        description: 'Unisex Zip Up Hoodie',
        price: 'From N2000'
      }
    ];
  }

  loadLongSleeves() {
    this.longSleeves = [
      {
        imageSrc: '../../../../assets/Images/unisexHeavyBlendH.webp',
        description: 'Unisex Heavy Blend Full Zip',
        price: 'From N2000'
      },
      {
        imageSrc: '../../../../assets/Images/unisexHeavyBlendHoodie.webp',
        description: 'Unisex Heavy Blend Hooded',
        price: 'From N2000'
      },
      {
        imageSrc: '../../../../assets/Images/unisexFullZip.webp',
        description: 'Unisex Full Zipp Hoodie',
        price: 'From N2000'
      },
      {
        imageSrc: '../../../../assets/Images/unisexCollegeHoodie.webp',
        description: 'Unisex College Hoodie',
        price: 'From N2000'
      },
      {
        imageSrc: '../../../../assets/Images/menNublend.webp',
        description: 'Men\'s NuBLEND Hooded',
        price: 'From N2000'
      },
      {
        imageSrc: '../../../../assets/Images/unisexZipUp.webp',
        description: 'Unisex Zip Up Hoodie',
        price: 'From N2000'
      }
    ];
  }

}
