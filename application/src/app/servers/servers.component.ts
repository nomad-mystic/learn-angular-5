import { Component, OnInit } from '@angular/core';


@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})

/**
 * @author Keith Murphy - kmurphy@catalyte.io
 * @whatItDoes Shows the users server status and allows them to create extra servers
 * @description
 * @class ServersComponent
 * @return void
 */

export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!!';
  serverName: string = '';

  // for binding assignment
  username: string = '';


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  // click event that populates the dom with value
  onCreateServer(): void {
    this.serverCreationStatus = 'Server was created name is ' + this.serverName;
  }

  // @see https://angular.io/api/core/EventEmitter
  ouUpdateServerName(event: Event): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  // for binding assignment
  onCreateUsername(): void {
    // console.log(<HTMLInputElement>event.target);
    if ('' !== this.username) {
      console.log(event);
      this.username = '';
    }
  }
} // end class













