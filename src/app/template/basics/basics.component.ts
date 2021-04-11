import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})

export class BasicsComponent implements OnInit {

  // Permite buscar un elemento a traves de una referencia local #referencia
  @ViewChild('form') form!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  productValid(): boolean {
    return this.form?.controls.product?.invalid && this.form?.controls.product?.touched;
  }

  priceValid(): boolean {
    return (this.form?.controls.price?.invalid && this.form?.controls.price?.touched) || this.form?.controls.price?.value < 0;
  }

  onSubmit() {
    console.log(this.form.value);
    
  }

}
