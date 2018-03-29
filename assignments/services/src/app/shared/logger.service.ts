import { Injectable } from '@angular/core';



export class LoggerService {

  protected activeToInactiveLog: number = 0;
  protected inactiveToActiveLog: number = 0;

  constructor() { }

  incrementActiveToInactive() {
    this.activeToInactiveLog++;
    console.log(this.activeToInactiveLog);
  }


  incrementIactiveToActive() {
    this.inactiveToActiveLog++;
    console.log(this.inactiveToActiveLog);
  }




}
