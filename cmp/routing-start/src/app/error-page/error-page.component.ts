import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit, OnDestroy {

  protected errorMessage: string;
  private dataSubscriber;

  constructor(private route: ActivatedRoute) { }

  ngOnInit (): void {

    // this.errorMessage = this.route.snapshot.data['message'];

    this.dataSubscriber = this.route.data
      .subscribe(
        (data: Data) => {
          this.errorMessage = data.message;
        }
      );
  }

  ngOnDestroy (): void {
    this.dataSubscriber.unsubscribe();
  }

}
