import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './core/not-found/not-found.component';
import { HomeComponent } from './core/home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'recipes',
    loadChildren: './recipe-book/recipes-book.module#RecipesBookModule', // LazyLoading
  },
  {
    path: 'shopping-list',
    loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' // LazyLoading
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules
    }),
  ],
  exports: [
    RouterModule,
  ],
})


export class AppRoutingModule {}
