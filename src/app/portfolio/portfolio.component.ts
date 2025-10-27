import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  projImgs: string[] = [
    '/images/bookFugeProj.png',
    '/images/shoporaProj.png',
    '/images/weather.png',
    '/images/quote.png',
    '/images/resp.png',
  ];

  isClicked: boolean = false;

  imgSrc: string = '';

  openProj(e: Event) {
    this.imgSrc = `${(e.target as HTMLInputElement).getAttribute('src')}`;
    this.isClicked = true;
  }

  closeBox() {
    this.isClicked = false;
  }
}
