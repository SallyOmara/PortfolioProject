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
    '/images/bookadise.png',
    '/images/connect4.png',
    '/images/dotes&boxes.png',
    '/images/meal.png',
    '/images/devfolio.png',
    '/images/daniels.png',
    '/images/fokir.png',
  ];

  projDesc: string[] = [
    'BookFluge : A cozy and elegant website for book lovers that allows users to explore and review books, designed with a warm and relaxing interface.',
    'Shopora : An e-commerce website focused on user-friendly design where users can create accounts, browse items, and shop easily online.',
    'Weather App : A modern weather dashboard that provides live temperature updates and weather forecasts in a clean, dark-themed interface.',
    'Your Quote : A simple and inspiring quote generator that displays random motivational quotes with each click of a button.',
    'Responsive Project : A fully responsive dashboard template built to adapt across devices, showcasing modern UI components and clean layout design.',
    'Bookadise : A stylish website dedicated to book enthusiasts, featuring quotes, book details, and a calm design inspired by libraries.',
    'Connect 4 : A fun interactive browser game where two players compete to connect four discs in a row, built with simple game logic.',
    'Dots & Boxes : A console-based strategy game that challenges players to connect dots and capture boxes, featuring a score tracker and undo/redo functions.',
    'Mealify. : A visually appealing restaurant website that presents healthy meals and modern food design with a responsive, user-friendly layout.',
    'DevFolio : A personal portfolio template for developers and freelancers to showcase their skills, projects, and services professionally.',
    'Daniels : A sleek and minimal personal website template designed to highlight professional profiles and portfolios with a modern aesthetic.',
    'Fokir : A dark-themed portfolio site tailored for creative professionals, focusing on personal branding and showcasing development or design work.',
  ];

  isClicked: boolean = false;

  imgSrc: string = '';
  imgDesc: string = '';

  openProj(e: Event) {
    this.imgSrc = `${(e.target as HTMLInputElement).getAttribute('src')}`;
    let num: number = this.projImgs.findIndex((img) => img === this.imgSrc);
    this.imgDesc = this.projDesc[num];
    this.isClicked = true;
  }

  closeBox() {
    this.isClicked = false;
  }
}
