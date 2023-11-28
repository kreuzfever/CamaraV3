import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutenticadoGuard } from './guard/autenticado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'ingresar',
    loadChildren: () => import('./ingresar/ingresar.module').then( m => m.IngresarPageModule)
  },
  { 
    path: 'restablecer',
    loadChildren: () => import('./restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule),
    canActivate: [AutenticadoGuard]
  },
  {
    path: 'rcontrasena',
    loadChildren: () => import('./rcontrasena/rcontrasena.module').then( m => m.RcontrasenaPageModule)
  },
  {
    path: 'tomarcaptura',
    loadChildren: () => import('./tomarcaptura/tomarcaptura.module').then( m => m.TomarcapturaPageModule),
    canActivate: [AutenticadoGuard]
  },
  {
    path: 'capturalista',
    loadChildren: () => import('./capturalista/capturalista.module').then( m => m.CapturalistaPageModule),
    canActivate: [AutenticadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'mapita',
    loadChildren: () => import('./mapita/mapita.module').then( m => m.MapitaPageModule),
    canActivate: [AutenticadoGuard]

  },
  {
    path: 'clima',
    loadChildren: () => import('./clima/clima.module').then( m => m.ClimaPageModule)
  }

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
