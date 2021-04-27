import { FormControl } from "@angular/forms";

/**
 * Exportar Validaciones u
 * otro elemento de validaciones
 */

export const regNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


/**
 * Verificar user
 */
export const verifyUsername = (control: FormControl) => {   
    const v: string = control.value?.trim().toLowerCase();
    
    if (v === 'strider') {
      return {
        noNickname: true
      };
    }

    return null;  
}