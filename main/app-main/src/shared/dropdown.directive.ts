import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  Output
} from '@angular/core';


@Directive({
  selector: '[appDirective]'
})

export class DropdownDirective {

  @HostBinding('class.show') private isOpen: boolean = false;

  constructor (private el: ElementRef) {}

  @HostListener('click', ['$event']) toggleDropdown (eventData: Event): void {
    if (this.el && !this.isOpen) {

      this.isOpen = true;
      this.el.nativeElement.children[1].classList.add('show');

    } else if (this.isOpen) {

      this.isOpen = false;
      this.el.nativeElement.children[1].classList.remove('show');

    }
  }

}
