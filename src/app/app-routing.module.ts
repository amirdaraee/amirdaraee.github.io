import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), data: { 'title': "amirdaraee" } },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule), data: { 'title': "About me", 'desc': 'I am Amirhossein a fullstack web developer fro, Iran' } },
  { path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule), data: { 'title': "Portfolio", 'desc': 'My personal portfolio' } },
  {
    path: 'uses',
    loadChildren: () => import('./uses/uses.module').then((m) => m.UsesModule),
    data: { title: 'Uses' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
