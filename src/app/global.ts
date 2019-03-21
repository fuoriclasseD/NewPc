import { Injectable } from '@angular/core';
@Injectable()
export class GlobalVars {
  public myGlobalVar: boolean = true;
  //showActions: boolean = false;
  constructor() {
    //this.myGlobalVar = true;
  }

  setMyGlobalVar(value : boolean) {
    this.myGlobalVar = value;
  }

  getMyGlobalVar() {
    return this.myGlobalVar;
  }
}