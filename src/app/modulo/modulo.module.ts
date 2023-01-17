import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteComponent } from './componente/componente.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ComponenteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ComponenteComponent
  ]
})
export class ModuloModule { }
