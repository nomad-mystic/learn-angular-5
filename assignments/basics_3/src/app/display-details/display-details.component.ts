import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})

/**
 * @author Keith Murphy - kmurphy@catalyte.io
 * @whatItDoes Completes the Udemy Angular Basics 3 assignment
 * @description
 * @class DisplayDetailsComponent
 * @return void
 */

export class DisplayDetailsComponent implements OnInit {

  protected display: boolean = true;
  protected incArray: number[] = [];
  protected counterArray: number = 0;
  protected backgroundColor: string = 'white';

  constructor() { }

  ngOnInit() {
  }

  protected incrementArray() {

    this.counterArray = this.incArray.push(this.counterArray += 1);

  }

  protected onToggleDisplay(event: Event): boolean {

    let displayValue;

    if (this.display === true) {
      this.display = false;
      displayValue = false;
    } else {
      this.display = true;
      displayValue = true;
    }

    // Add to the array counter and display it
    this.incrementArray();

    return displayValue;

  }
}
