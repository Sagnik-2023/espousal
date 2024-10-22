import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'about-us', loadChildren: () => import('../about-us/about-us.module').then(m => m.AboutUsModule)},
      { path: 'portfolio', loadChildren: () => import('../portfolio/portfolio.module').then(m => m.PortfolioModule)},
      { path: 'blog', loadChildren: () => import('../blog/blog.module').then(m => m.BlogModule)},
      {path: 'contact-us', loadChildren: () => import('../contact-us/contact-us.module').then(m => m.ContactUsModule)},
      {path: 'landing-page', loadChildren: () => import('../landing-page/landing-page.module').then(m => m.LandingPageModule)},
      {path: 'texas', loadChildren: () => import('../texas/texas.module').then(m => m.TexasModule)},
      {path: '', redirectTo: 'landing-page',pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspousalHomeRoutingModule { }
