import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
} from '@angular/core';

import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit, ContentChild,
  DoCheck, ElementRef, OnDestroy,
  SimpleChanges, ViewChild,
} from "../../../../../main/app-main/node_modules/@angular/core";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // None, Native
})

export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit, OnDestroy {

  // this gets content from parent components
  @Input('serverElement') protected element: {type: string, name: string, content: string};
  @Input() protected name: string;

  @ViewChild('nameElement') protected nameElement: ElementRef;

  @ContentChild('contentParagraph') protected paragraph: ElementRef;


  // HOOKS
  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log(this.nameElement);
    console.log(this.nameElement.nativeElement.textContent);
  }


  ngDoCheck() {
    console.log('Do change');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewChecked() {
    console.log('AfterViewChecked');
  }
  ngAfterViewInit() {
    console.log('AfterViewInit');
    console.log(this.nameElement.nativeElement.textContent);
    console.log(this.paragraph);
    console.log(this.paragraph.nativeElement.textContent);
  }
  ngOnDestroy() {
    console.log('On Destory');
  }
}
