import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ValidatorService {

  /**
  * Exportar Validaciones u
  * otro elemento de validaciones
  */
  public regNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  /**
   * Verificar user
   */
  verifyUsername(control: FormControl): ValidationErrors | null {   
    const v: string = control.value?.trim().toLowerCase();
    if (v === 'strider') {
      return {
        noNickname: true
      };
    }

    return null;  
  }

  /**
   * Comparar Contraseñas
   */
  checkPasswords(p1: string, p2: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      const pass1 = control.get(p1)?.value;
      const pass2 = control.get(p2)?.value;

      if (pass1 !== pass2) {
        control.get(p2)?.setErrors({ checked: true });
        return {
          checked: true
        }        
      }

      control.get(p2)?.setErrors(null);
      return null;
    }
  }

}