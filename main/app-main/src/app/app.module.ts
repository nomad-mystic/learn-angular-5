import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent, // from core now
    // NotFoundComponent, // from core now
    // HomeComponent, // from core now
  ],
  imports: [
    BrowserModule, // Like common module but for root app module
    // FormsModule,
    HttpModule,
    // RecipesBookModule,
    // ShoppingListModule,
    CoreModule,
    AuthModule,
    SharedModule,
    AppRoutingModule, // This might need to be on the bottom to prevent child routing from working
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
