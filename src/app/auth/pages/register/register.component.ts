import { Component, OnInit } from '@angular/core';

// Form
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';

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
    email:     ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username:  ['', [Validators.required, this.validatorService.verifyUsername]],
    password:  ['', [Validators.required, Validators.minLength(6)]],
    cpassword: ['', [Validators.required]]
  }, {
    validators: [this.validatorService.checkPasswords('password', 'cpassword')]
  });

  constructor(
    private fb: FormBuilder, 
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService) {
  }

  ngOnInit(): void {
    this.form.reset({
      name: 'Demo Demo',
      email: 'developer@form.com',
      username: 'Sunny',
      password: '123456',
      cpassword: '123456',
    })
  }

  /**
   * Getter de campo Invalid    
   */
  get emailErrorMSG(): string {
    const errors = this.form.get('email')?.errors;
    if (errors?.required) {
      return 'El correo electronico es obligatorio.';
    } else if (errors?.pattern) {
      return 'El correo electronico no coinside con el formato establecido.';
    } else if (errors?.wasTakenEmail) {
      return 'El correo electronico ya ha sido registrado.';
    }

    return '';
  }

  campoInvalid(campo: string) {
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched;
  }

  submit() {
    console.log(this.form.value);
    this.form.markAllAsTouched();
  }

}