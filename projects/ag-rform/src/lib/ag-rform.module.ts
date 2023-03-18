import { NgModule } from '@angular/core';
import { AgRFormComponent } from './ag-rform.component';
import { FormFieldDirective } from './directives/form-field.directive';
import { InputTagComponent } from './base/input-tag/input-tag.component';
import { SelectTagComponent } from './base/select-tag/select-tag.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AgRFormComponent,
    FormFieldDirective,
    InputTagComponent,
    SelectTagComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, CommonModule],
  exports: [
    AgRFormComponent,
    InputTagComponent,
    FormFieldDirective,
  ],
  entryComponents: [
    AgRFormComponent,
    InputTagComponent,
    FormFieldDirective,
  ],
})
export class AgRFormModule { }
