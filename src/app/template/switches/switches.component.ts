import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})

export class SwitchesComponent {

  public person = {
    gender: 'F',
    notifications: true
  }

  public faq: boolean = false;

}
