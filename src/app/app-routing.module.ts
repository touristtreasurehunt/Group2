import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'geolocation',
    loadChildren: () => import('./geolocation/geolocation.module').then( m => m.GeolocationPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
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
  {
    path: 'score',
    loadChildren: () => import('./score/score.module').then( m => m.ScorePageModule)
  },
  {
    path: 'geolocation111',
    loadChildren: () => import('./geolocationpages/geolocation111/geolocation111.module').then( m => m.Geolocation111PageModule)
  },
  {
    path: 'geolocation112',
    loadChildren: () => import('./geolocationpages/geolocation112/geolocation112.module').then( m => m.Geolocation112PageModule)
  },
  {
    path: 'geolocation113',
    loadChildren: () => import('./geolocationpages/geolocation113/geolocation113.module').then( m => m.Geolocation113PageModule)
  },
  {
    path: 'geolocation121',
    loadChildren: () => import('./geolocationpages/geolocation121/geolocation121.module').then( m => m.Geolocation121PageModule)
  },
  {
    path: 'geolocation122',
    loadChildren: () => import('./geolocationpages/geolocation122/geolocation122.module').then( m => m.Geolocation122PageModule)
  },
  {
    path: 'geolocation123',
    loadChildren: () => import('./geolocationpages/geolocation123/geolocation123.module').then( m => m.Geolocation123PageModule)
  },
  {
    path: 'geolocation211',
    loadChildren: () => import('./geolocationpages/geolocation211/geolocation211.module').then( m => m.Geolocation211PageModule)
  },
  {
    path: 'geolocation212',
    loadChildren: () => import('./geolocationpages/geolocation212/geolocation212.module').then( m => m.Geolocation212PageModule)
  },
  {
    path: 'geolocation213',
    loadChildren: () => import('./geolocationpages/geolocation213/geolocation213.module').then( m => m.Geolocation213PageModule)
  },
  {
    path: 'geolocation221',
    loadChildren: () => import('./geolocationpages/geolocation221/geolocation221.module').then( m => m.Geolocation221PageModule)
  },
  {
    path: 'geolocation222',
    loadChildren: () => import('./geolocationpages/geolocation222/geolocation222.module').then( m => m.Geolocation222PageModule)
  },
  {
    path: 'geolocation223',
    loadChildren: () => import('./geolocationpages/geolocation223/geolocation223.module').then( m => m.Geolocation223PageModule)
  },


  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
