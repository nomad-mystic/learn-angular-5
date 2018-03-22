import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
      .online {
        color: white;
      }
   `]
})

/**
 * @author Keith Murphy - kmurphy@catalyte.io
 * @whatItDoes Display information from the server
 * @description
 * @class
 * @return void
 */

export class ServerComponent {

  protected serverId: number = 10;
  protected serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Offline' : 'Online';
  }


  // return the server status
  public getServerStatus() : string {
    return this.serverStatus;
  }

  // changes the color of the server status if it is Online or Offline
  public getColor(): string {

    return this.serverStatus === 'Online' ? 'green' : 'red';

  }
} // end class
