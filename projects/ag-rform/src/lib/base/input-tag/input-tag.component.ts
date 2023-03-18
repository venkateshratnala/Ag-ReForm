import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AgrFormFieldConfig } from '../agrFormFieldComponent';

@Component({
  selector: 'lib-input-tag',
  templateUrl: './input-tag.component.html',
  styleUrls: ['./input-tag.component.css'],
})
export class InputTagComponent implements OnInit {
  @Input() field: AgrFormFieldConfig;
  @Input() group: FormGroup;
  constructor() {}
  ngOnInit(): void {}
  getMinValue() {
    if (this.field.inputType == 'number' && this.field.min >= 0) {
      return this.field.min;
    }
    return '';
  }
  getMaxValue() {
    if (this.field.inputType == 'number' && this.field.max >= 0) {
      return this.field.max;
    }
    return '';
  }
  getMaxLength() {
    if (this.field.maxlength != '' && !isNaN(+this.field.maxlength)) {
      return +this.field.maxlength;
    }
    return null;
  }

  numberWithCommaOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    let decimalchar = localStorage.getItem('decimalchar');
    if (decimalchar == ',' && charCode == 46) {
      return false;
    }
    if (decimalchar == '.' && charCode == 44) {
      return false;
    }

    if (
      charCode > 31 &&
      (charCode < 48 || charCode > 57) &&
      charCode != 44 &&
      charCode != 46 &&
      charCode != 45
    ) {
      return false;
    }
    return true;
  }
  public imposeMinMax(el: any): void {
    if (el.value != '' && el.min && el.max) {
      if (parseFloat(el.value) < parseFloat(el.min)) {
        el.value = el.min;
        this.group.patchValue(el.min);
      }
      if (parseFloat(el.value) > parseFloat(el.max)) {
        el.value = el.max;
        this.group.patchValue(el.max);
      }
    }
  }
  private rounOffValue(val): any {
    if (val == null || val == '') {
      return val;
    } else {
      let newVal =
        this.field.minimumFractionDigits > 0
          ? parseFloat(val).toFixed(this.field.minimumFractionDigits)
          : Math.round(val);
      if (isNaN(+newVal)) {
        newVal = null;
      }
      return newVal;
    }
  }
  onBlur(event) {
    let val = this.group.get(this.field.field).value;
    let newVal = this.rounOffValue(val);
    this.group.patchValue({ [this.field.field]: newVal }, { emitEvent: false });

    if (this.field.min != undefined) {
      if (parseFloat(val) < this.field.min) {
        this.group.patchValue({ [this.field.field]: null });
      }
    }
    if (this.field.max != undefined) {
      if (parseFloat(val) > this.field.max) {
        this.group.patchValue({ [this.field.field]: null });
      }
    }
    if (this.field.selectionChange) {
      this.field.selectionChange(event, this.group);
    }
  }
  onPaste(event: ClipboardEvent) {
    let clipboardData = event.clipboardData;
    let pastedText: any = clipboardData.getData('text');
    let arr = pastedText.split(',');
    let invalidTxt = true;
    arr.forEach((element) => {
      if (
        !isNaN(element) &&
        element > 0 &&
        element.indexOf('.') == -1 &&
        invalidTxt
      ) {
        invalidTxt = true;
      } else {
        invalidTxt = false;
      }
    });

    return invalidTxt;
  }
  onChange(event) {
    this.field.selectionChange(event);
  }
}
