import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // None, Native
})
export class GameControlComponent implements OnInit {

  @Output() protected numberEvent = new EventEmitter<{number: number}>();
  // @Output protected endTimer = new EventEmitter<{endTimer: number}>();

  protected numberCount: number = 0;
  protected endTimer: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  // Starts the game
  onStartGame(): void {
    let timer = setInterval(() => {
      this.endTimer  ? clearInterval(timer) : false;
      this.numberEvent.emit({
        number: this.numberCount += 1,
      });
    }, 1000);
  }

  // ends the game
  onEndGame(): void {
    this.endTimer = true;
    console.log('Game ended');
  }
}
