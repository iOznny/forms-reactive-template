import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})

export class BasicsComponent implements OnInit {

  /* public form: FormGroup = new FormGroup({
    'name': new FormControl('RTX 3090'),
    'price': new FormControl(0),
    'existencias': new FormControl(5)
  }); */

  public form: FormGroup = this.fb.group({
    // [valor, validadores sincronos, val asincronos]
    name: [, [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form.reset({
      name: 'RTX 3090',
      price: 34243
    })
  }

  inputInvalid(campo: string) {
    return this.form.controls[campo].errors && this.form.controls[campo].touched;
  }

  public save() {    
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;      
    }
    
    
    console.log(this.form.value);
    this.form.reset();
  }

}