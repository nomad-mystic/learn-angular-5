import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Error } from 'tslint/lib/error';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private Subscription: Subscription;
  private myObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {

    const myNumbers = Observable.interval(1000)
      .map((data: number) => {
        return data * 2;
      });


    this.Subscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      },
      (error: Error) => {

      }
    );

    const myObs = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
          observer.next('first package');
      }, 2000);

      setTimeout(() => {
          observer.next('second package');
      }, 4000);

      setTimeout(() => {
          observer.error('this is a broken package');
          observer.complete();
      }, 5000);
    });


    this.myObsSubscription = myObs.subscribe(
      (message: string) => {
        console.log(message);
      },
      (error: string) => {
        console.log(error);

      },
      () => {
        console.log('completed');
      }
    );

  }

  ngOnDestroy () {
    this.myObsSubscription.unsubscribe();
    this.Subscription.unsubscribe();
  }
}
