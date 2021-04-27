import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

// AsyncValidator
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { TmplAstRecursiveVisitor } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class EmailValidatorService implements AsyncValidator {

  constructor(private http: HttpClient) { }


  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${ email }`)
      .pipe(
        //delay(2000),
        map( resp => {
          return (resp.length == 0) ? null : { wasTakenEmail: true };
        })
      )
  }

}