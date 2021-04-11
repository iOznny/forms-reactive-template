import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  url: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})

export class SidemenuComponent {

  templateMenu: MenuItem[] = [
    {
      text: 'Basicos',
      url: './template/basics'
    },
    {
      text: 'Dinamicos',
      url: './template/dinamics'
    },
    {
      text: 'Switches',
      url: './template/switches'
    }
  ];

  reactiveMenu: MenuItem[] = [
    {
      text: 'Basicos',
      url: './reactive/basics'
    },
    {
      text: 'Dinamicos',
      url: './reactive/dinamics'
    },
    {
      text: 'Switches',
      url: './reactive/switches'
    }
  ];

}
