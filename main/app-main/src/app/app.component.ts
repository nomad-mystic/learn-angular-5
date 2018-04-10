import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// main app
export class AppComponent implements OnInit {
  private title = 'app';
  private loadedFeature = 'recipe';
  protected navItem: string = 'Recipes(current)';

  // constructor (private authService: AuthService) {}

  ngOnInit (): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyB_hDw8dn1J9M_t5IVTN6xzbo6yL_gHbg4',
      authDomain: 'nomad-recipe-book.firebaseapp.com',
    });

    console.log('firebase in app component was called');
  }


  protected onNavChanged(currentNavItem: {currentNavItem: string}): void {

    console.log(currentNavItem.currentNavItem);

    this.navItem = currentNavItem.currentNavItem;

  }

  protected onNavigate (feature: string): void {
    this.loadedFeature = feature;
  }

}
