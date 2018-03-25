import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input() protected number: number;

  protected evenNumber: number;


  constructor() { }

  ngOnInit() {
  }

  displayEven() {

    this.evenNumber = this.number;

    if (this.evenNumber % 2 === 0) {
      return this.evenNumber;
    }

  }

}
