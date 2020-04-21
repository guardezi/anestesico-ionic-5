
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

// const adminOnly = () => hasCustomClaim('admin');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth/login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);
// const belongsToAccount = (next) => hasCustomClaim(`account-${next.params.id}`);

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLoggedInToHome
    }
  },
  {
    path: 'home',
    loadChildren: './pages/pages.module#PagesModule',
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    },
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// import { NgModule } from '@angular/core';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'folder/Inbox',
//     pathMatch: 'full'
//   },
//   {
//     path: 'folder/:id',
//     loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
//   }
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}



