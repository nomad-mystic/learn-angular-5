import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipe-book/recipe.service';
import { HttpService } from './services/http.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';

import { AppRoutingModule } from './app-routing.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipesBookModule } from './recipe-book/recipes-book.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule, // Like common module but for root app module
    FormsModule,
    HttpModule,
    RecipesBookModule,
    ShoppingListModule,
    AuthModule,
    SharedModule,
    AppRoutingModule, // This might need to be on the bottom to prevent child routing from working
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    RecipeService,
    HttpService,
    AuthService,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
