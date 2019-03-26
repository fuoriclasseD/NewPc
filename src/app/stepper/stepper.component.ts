import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppComponent} from '../app.component';



@Component({
// tslint:disable-next-line: component-selector
  selector: 'stepper',
  templateUrl: 'stepper.component.html'
})
export class StepperComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder , public appComponent: AppComponent) {

    appComponent.setElencoPos(false);
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      fnameCtrl: ['', Validators.required],
      lnameCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      addressCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      DateScoreCtrl: ['', Validators.required]
    });

    this.fourthFormGroup = this._formBuilder.group({
      DocCtrl: ['', Validators.required]
    });

  }

}
