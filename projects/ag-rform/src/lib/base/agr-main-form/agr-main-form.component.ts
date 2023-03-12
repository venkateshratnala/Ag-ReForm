import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AgrFormFieldConfig } from '../agrFormFieldComponent';

@Component({
  selector: 'lib-agr-main-form',
  templateUrl: './agr-main-form.component.html',
  styleUrls: ['./agr-main-form.component.css'],
})
export class AgrMainFormComponent implements OnInit {
  @Input() fields: AgrFormFieldConfig[] = [];
  @Input() data: any;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @Input() callback: any;
  @Input() cols: number = 12;
  @Input() rowHeight: string = '40px';
  form: FormGroup;
  get value() {
    return this.form.value;
  }
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.form = this.initControls();
  }

  onSubmit(event: Event) {
    this.fields?.forEach((field) => {
      if (field.inputType === 'number') {
        if (isNaN(this.form?.get(field.name).value)) {
          this.form.patchValue({ [field.name]: null }, { emitEvent: false });
        }
      }
    });
    if (this.form.valid) {
      if (this.data && this.data.callback) {
        this.data && this.data.callback(this.form.value);
      }
      this.submit.emit(this.form.value);
    }
  }
  /**
   * Finds the control list from form configuration.
   * Added control in from group.
   * Apply validation functions from configuration.
   */
  initControls() {
    const group = this.fb.group({});
    this.fields.forEach((field) => {
      if (field.type === 'button') return;
      if (this.data && this.data.data && field.field) {
        field.value = this.data.data[field.field] || '';
        field.label = field.label;
      }
      const control = this.fb.control(field.value);
      if (group.contains(field.name)) {
        group.removeControl(field.name);
      }
      group.addControl(field.name, control);
    });
    return group;
  }
  updateValues() {
    this.fields.forEach((field) => {
      if (field.type === 'button' || field.type === 'spacer') {
        return;
      }
      if (this.data && this.data.data && field.field) {
        field.value = this.data.data[field.field] || '';
        field.label = field.label;
      }
      const control = this.fb.control(field.value);
      this.form.controls[field.name].setValue(field.value);
    });
  }
}
