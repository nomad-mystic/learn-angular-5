import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()

export class UsersService {

  constructor(private loggerService: LoggerService) { }

  public activeUsers = ['Max', 'Anna'];
  public inactiveUsers = ['Chris', 'Manu'];
  public ticker: number = 0;

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);

    this.loggerService.incrementActiveToInactive();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);

    this.loggerService.incrementIactiveToActive();

  }

}
