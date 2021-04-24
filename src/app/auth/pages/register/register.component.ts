import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {

  public regNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.regNamePattern)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  campoInvalid(campo: string) {
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched;
  }

  submit() {
    console.log(this.form.value);
    
    this.form.markAllAsTouched();
  }

}
