import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})

export class SwitchesComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    notifications: [true, Validators.required],
    conditions: [false, Validators.requiredTrue]
  });

  public person = {
    gender: 'F',
    notifications: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form.reset({
      ...this.person,
      conditions: false
    });

    this.form.valueChanges.subscribe(
      form => {
        delete form.conditions;
        this.person = form;
    });
  }

  /**
   * Save form
   */
  public save() {
    const formValue = {...this.form.value};

    delete formValue.conditions;
    this.person = formValue;
  }

}