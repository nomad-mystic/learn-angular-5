import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})


export class BetterHighlightDirective implements OnInit {

  @Input() protected defaultColor: string = 'transparent';
  @Input('appBetterHighlight') protected highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColor  = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover (eventData: Event) {
    // console.log(eventData);
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave (eventData: Event) {
    // console.log(eventData);
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
