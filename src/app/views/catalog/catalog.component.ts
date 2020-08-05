import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
products: boolean;
newArrivals: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  isProdClicked() {
    this.products = true;
    this.newArrivals = false;
  }

  isNewArrClicked() {
    this.products = false;
    this.newArrivals = true;
  }

}
