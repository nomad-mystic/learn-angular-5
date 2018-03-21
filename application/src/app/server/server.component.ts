import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',

})

/**
 * @author Keith Murphy - kmurphy@catalyte.io
 * @whatItDoes Display information from the server
 * @description
 * @class
 * @return void
 */

export class ServerComponent {

  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() : string {
    return this.serverStatus;
  }

}
