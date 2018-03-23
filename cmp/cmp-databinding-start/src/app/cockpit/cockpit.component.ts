import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // newServerName = '';
  // newServerContent = '';
  // Used to push properties to parent components
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // this gets an element for the DOM as ElementRef
  // @ViewChild(CockpitComponent) private serverContentInput: HTMLInputElement;
  @ViewChild('serverContentInput') private serverContentInput: ElementRef;


  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    // console.log(nameInput.value);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {

    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }


}
