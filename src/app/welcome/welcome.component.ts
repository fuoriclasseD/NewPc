import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  elencoPos  : boolean = true;
  constructor(public appComponent: AppComponent) { 

    appComponent.setElencoPos(true);
  }

  ngOnInit() {
  }

}
