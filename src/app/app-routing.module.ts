import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},  {
    path: 'rute111',
    loadChildren: () => import('./rute111/rute111.module').then( m => m.Rute111PageModule)
  },
  {
    path: 'rute112',
    loadChildren: () => import('./rute112/rute112.module').then( m => m.Rute112PageModule)
  },
  {
    path: 'rute113',
    loadChildren: () => import('./rute113/rute113.module').then( m => m.Rute113PageModule)
  },
  {
    path: 'rute121',
    loadChildren: () => import('./rute121/rute121.module').then( m => m.Rute121PageModule)
  },
  {
    path: 'rute122',
    loadChildren: () => import('./rute122/rute122.module').then( m => m.Rute122PageModule)
  },
  {
    path: 'rute123',
    loadChildren: () => import('./rute123/rute123.module').then( m => m.Rute123PageModule)
  },
  {
    path: 'rute211',
    loadChildren: () => import('./rute211/rute211.module').then( m => m.Rute211PageModule)
  },
  {
    path: 'rute212',
    loadChildren: () => import('./rute212/rute212.module').then( m => m.Rute212PageModule)
  },
  {
    path: 'rute213',
    loadChildren: () => import('./rute213/rute213.module').then( m => m.Rute213PageModule)
  },
  {
    path: 'rute221',
    loadChildren: () => import('./rute221/rute221.module').then( m => m.Rute221PageModule)
  },
  {
    path: 'rute222',
    loadChildren: () => import('./rute222/rute222.module').then( m => m.Rute222PageModule)
  },
  {
    path: 'rute223',
    loadChildren: () => import('./rute223/rute223.module').then( m => m.Rute223PageModule)
  },

  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
