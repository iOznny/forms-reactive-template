import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})

export class DinamicsComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array(
      [
        ['Demo', Validators.required], 
        ['Dead Strandig', Validators.required]
      ], 
      Validators.required
    )
  });

  get favoritesArr() {
    return this.form.get('favorites') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  inputInvalid(campo: string) {
    return this.form.controls[campo].errors && this.form.controls[campo].touched;
  }

  /**
   * Save Form
   */
  public save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;      
    }

    console.log(this.form.value);    
  }

}
