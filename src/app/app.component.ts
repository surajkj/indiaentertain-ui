import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { UserService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor (
    private userService: UserService,private titleService: Title
  ) {}

  ngOnInit() {
    this.userService.populate();
  }
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
