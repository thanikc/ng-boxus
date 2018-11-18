import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { PagesComponent } from './pages.component';
import { IntroComponent } from './intro/intro.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Route[] = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: 'pages', component: PagesComponent },
];

@NgModule({
  declarations: [PagesComponent, IntroComponent, PortfolioComponent, AboutComponent, SkillsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PagesModule { }
