import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full', title: 'About Page' },
  { path: 'about', component: AboutComponent, title: 'About Page' },
  { path: 'contact', component: ContactComponent, title: 'Contact Page' },
  { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio Page' },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];
