import { Component, OnInit, HostBinding, ViewChild, ElementRef } from '@angular/core';

import { User, UserService } from '../../core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   navBarOpen: boolean = false;
   @ViewChild('navBar') navBar: ElementRef;

  constructor(
    private userService: UserService
  ) {}

  currentUser: User;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
  }

  onNavbarclick() {
    if(!this.navBarOpen) {
      this.navBar.nativeElement.style.display="block";
    } else {
      this.navBar.nativeElement.style.display="none";
    }
    this.navBarOpen = !this.navBarOpen;
  }
}
