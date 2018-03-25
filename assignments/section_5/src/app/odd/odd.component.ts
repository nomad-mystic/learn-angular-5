import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  @Input() protected number: number;

  protected oddNumber: number;

  constructor() { }

  ngOnInit() {
  }

  displayOdd(): number {

    this.oddNumber = this.number;

    if (Math.abs(this.oddNumber % 2) === 1) {

      return this.oddNumber;

    }

  }

}
