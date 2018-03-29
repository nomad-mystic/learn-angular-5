import { Injectable } from '@angular/core';

@Injectable()

export class LoggerService {

  protected loggerTick: number;
  protected activeCount: number;

  constructor() { }

  // logTicker(ticker: number) {
  //   return this.loggerTick += ticker;
  // }

  logActiveSelection(ticker: number) {

    this.activeCount = ticker += 1;

  }




}
