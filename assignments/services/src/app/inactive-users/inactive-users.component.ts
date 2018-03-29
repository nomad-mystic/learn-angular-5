import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { LoggerService } from '../shared/logger.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];


  constructor(private usersService: UsersService, private loggerService: LoggerService) {}


  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);

  }
}
