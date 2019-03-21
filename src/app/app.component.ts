import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import {GlobalVars} from './global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public elencoPos  : boolean = true;

  constructor(public auth: AuthService,  public globalVars: GlobalVars) {
    auth.handleAuthentication();
    
    this.elencoPos = true;
  }

  
  public setElencoPos(value : boolean) {
    this.elencoPos = value;
  }
}