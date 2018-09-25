import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { User, UserService } from '../core';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings.component.html',
  styleUrls : ['./settings.component.css']
})
export class SettingsComponent implements OnInit {


  constructor() {
    
  }
    
  public ngOnInit()  {
    console.log('Coming in setting')
  }


}
