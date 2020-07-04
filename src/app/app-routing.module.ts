import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'notas',
    loadChildren: () => import('./notas/notas.module').then( m => m.NotasPageModule)
  },
  {
    path: 'calcu2',
    loadChildren: () => import('./calcu2/calcu2.module').then( m => m.Calcu2PageModule)
  },
  {
    path: 'red',
    loadChildren: () => import('./red/red.module').then( m => m.RedPageModule)
  },
  {
    path: 'blue',
    loadChildren: () => import('./blue/blue.module').then( m => m.BluePageModule)
  },
  {
    path: 'pink',
    loadChildren: () => import('./pink/pink.module').then( m => m.PinkPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
