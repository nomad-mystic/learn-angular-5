import {Component, EventEmitter, Output} from "@angular/core";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})


export class HeaderComponent {

  @Output() currentNavItem = new EventEmitter<{currentNavItem: string}>();
  protected navItem: string;

  protected onMenuChange(event: Event): void {

    this.navItem = (<HTMLAnchorElement>event.target).innerText;

    this.currentNavItem.emit({
      currentNavItem: this.navItem,
    });

    console.log(this.currentNavItem);

  }

}
