import { Component, OnInit } from '@angular/core';
import { UsersService } from './shared/users.service';
import { LoggerService } from './shared/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  protected activeUsers: string[];
  protected inactiveUsers: string[];
  protected activeCount = 5;
  // protected ticker: number = 0;

  constructor(private usersService: UsersService, private loggerService: LoggerService) {}

  ngOnInit() {
    // this.activeUsers = this.usersService.activeUsers;
    // this.inactiveUsers = this.usersService.inactiveUsers;
  }

}
