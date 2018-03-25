import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  protected number: number;

  onGameStarted(numberCount: {number: number}): void {

    console.log(numberCount.number);
    this.number = numberCount.number;

  }
}
