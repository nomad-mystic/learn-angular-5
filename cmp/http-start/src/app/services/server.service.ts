import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()


export class ServerService {

  constructor (private http: Http) {}

  storeServersPOST (servers: any[]): Observable<any> {
    const headers = new Headers({
      'Content-Type': 'application/json; charset=utf-8'
    });

    return this.http.post('https://angular-5-http-server.firebaseio.com/data.json',
      servers,
      {
        headers: headers,
    });
  }

  storeServersPUT (servers: any[]): Observable<any> {
    const headers = new Headers({
      'Content-Type': 'application/json; charset=utf-8'
    });

    return this.http.put('https://angular-5-http-server.firebaseio.com/data.json',
      servers,
      {
        headers: headers,
    });
  }


  // Live
  // getServers () {
  //   return this.http.get('https://angular-5-http-server.firebaseio.com/data.json')
  //     .map(
  //       (response: Response) => {
  //         const data = response.json();
  //         for (const server of data) {
  //           // if (data.hasOwnProperty(server)) {
  //             console.log(server);
  //             server.name = 'FETCHED_' + server.name;
  //           // }
  //         }
  //         console.log(data);
  //         return data;
  //       }
  //     );
  // }

  // For Error Handling
  getServers (): Observable<any> {
    return this.http.get('https://angular-5-http-server.firebaseio.com/data')
      .map(
        (response: Response) => {
          const data = response.json();
          for (const server of data) {
            // if (data.hasOwnProperty(server)) {
              console.log(server);
              server.name = 'FETCHED_' + server.name;
            // }
          }
          console.log(data);
          return data;
        }
      ).catch(
        (error: Response) => {
          // return Observable.throw(error);
          return Observable.throw(`Something went wrong with getting the data: ${error}`);
        }
      );
  }


  getAppName (): Observable<any> {
    return this.http.get('https://angular-5-http-server.firebaseio.com/appName.json')
      .map(
        (response: Response) => {
          console.log(response);
          return response.json();
        }
      )
  }

}
