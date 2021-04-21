import { NgModule } from '@angular/core';

// Module
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateRoutingModule } from './template-routing.module';

// Components
import { BasicsComponent } from './basics/basics.component';
import { DinamicsComponent } from './dinamics/dinamics.component';
import { SwitchesComponent } from './switches/switches.component';

// Directivas
import { CustomMinDirective } from './directives/custom-min.directive';

@NgModule({
  declarations: [
    BasicsComponent,
    DinamicsComponent,
    SwitchesComponent,
    CustomMinDirective
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule
  ]
})

export class TemplateModule { }
