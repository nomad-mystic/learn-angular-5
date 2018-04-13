import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB_hDw8dn1J9M_t5IVTN6xzbo6yL_gHbg4',
      authDomain: 'nomad-recipe-book.firebaseapp.com',
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
