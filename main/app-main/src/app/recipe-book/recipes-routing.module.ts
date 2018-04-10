import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { RecipeBookComponent } from './recipe-book.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';


const recipesRoutes = [
  {
    path: '',
    component: RecipeBookComponent,
    children: [
      {
        path: '',
        component: RecipesStartComponent,
      },
      {
        path: 'new',
        component: RecipeEditComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        canActivate: [AuthGuardService],
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    AuthGuardService,
  ]
})

export class RecipesRoutingModule {}
