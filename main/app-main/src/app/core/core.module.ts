import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { RecipeService } from '../recipe-book/recipe.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { HttpService } from '../services/http.service';
import { AuthService } from '../auth/auth.service';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [
    CommonModule,
    HeaderComponent, // This needs to be exported because it needs to be used by the root app component
    AppRoutingModule,
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    RecipeService,
    HttpService,
    AuthService,
  ]
})


export class CoreModule {}
