import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// main app
export class AppComponent {
  title = 'app';

  protected navItem: string = 'Recipes(current)';

  protected onNavChanged(currentNavItem: {currentNavItem: string}): void {

    console.log(currentNavItem.currentNavItem);

    this.navItem = currentNavItem.currentNavItem;

  }

}
