import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  nobodyFired:Boolean = true;
  lukeFiredFlag: Boolean = false;
  jamesFiredFlag: Boolean = false;
  martinFiredFlag: Boolean = false;
  chrisFiredFlag: Boolean = false;

  constructor() { }

  public ngOnInit()
  {
  }

  public fireDeveloper(developerName: String){
    this.nobodyFired = false;
    this.lukeFiredFlag = false;
    this.jamesFiredFlag = false;
    this.martinFiredFlag = false;
    this.chrisFiredFlag = false;
    switch (developerName){
      case "luke":
        this.lukeFiredFlag = true;
        break;
      case "james":
        this.jamesFiredFlag = true;
        break;
      case "martin":
        this.martinFiredFlag = true;
        break;
      case "chris":
        this.chrisFiredFlag = true;
        break;
      default:
      this.nobodyFired = true;
    }
  }

}
