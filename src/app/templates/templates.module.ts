import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Template1Component } from './components/template1/template1.component';
import { Template2Component } from './components/template2/template2.component';



@NgModule({
  declarations: [Template1Component, Template2Component],
  imports: [
    CommonModule
  ],
  exports: [Template1Component, Template2Component]
})
export class TemplatesModule { }
