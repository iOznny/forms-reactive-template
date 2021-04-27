import { Component, OnInit } from '@angular/core';

// Form
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Patterns
import { emailPattern, regNamePattern, verifyUsername } from 'src/app/shared/validator/validations';

// Services
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {

  /**
   * Creación del Formulario
  */
  public form: FormGroup = this.fb.group({
    name:      ['', [Validators.required, Validators.pattern(this.validatorService.regNamePattern)]],
    email:     ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    username:  ['', [Validators.required, this.validatorService.verifyUsername]],
    password:  ['', [Validators.required, Validators.minLength(6)]],
    cpassword: ['', [Validators.required, Validators.minLength(6)]]
  }, {
    validators: [this.validatorService.checkPasswords('p1', 'p1')]
  });

  constructor(private fb: FormBuilder, private validatorService: ValidatorService) { }

  ngOnInit(): void {
    this.form.reset({
      name: 'Demo Demo',
      email: 'developer@form.com',
      username: 'Sunny'
    })
  }

  /**
   * Getter de campo Invalid    
   */
  campoInvalid(campo: string) {
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched;
  }

  submit() {
    console.log(this.form.value);
    this.form.markAllAsTouched();
  }

}
