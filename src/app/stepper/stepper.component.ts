import {Component,OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';




@Component({
  selector: 'stepper',
  templateUrl: 'stepper.component.html'
})
export class StepperComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      fnameCtrl: ['', Validators.required],
      lnameCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      addressCtrl: ['', Validators.required]
    });
  }

}