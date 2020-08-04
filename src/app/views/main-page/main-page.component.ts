import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  currentYear: number;
  constructor() { }

  ngOnInit(): void {
    const now = new Date();
    this.currentYear = now.getUTCFullYear();
  }

}
