import { Directive, Input, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReusableFormFieldMapper } from '../mappers/formfield.mapper';

@Directive({
  selector: '[FormFieldDirective]',
})
export class FormFieldDirective {
  @Input() field: any;
  @Input() group: FormGroup;
  componentRef: any;
  constructor(private container: ViewContainerRef) {}
  ngOnInit() {
    if (!this.field || !this.field.type) return;
    this.componentRef = this.container.createComponent(ReusableFormFieldMapper[this.field.type]);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}
