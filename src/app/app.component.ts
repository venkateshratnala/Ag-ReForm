import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AgRFormComponent, AgrFormFieldConfig,  } from 'AgRForm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'RvpForms';
  field: AgrFormFieldConfig[] = [];
  @ViewChild('reusableForm') reusableForm : AgRFormComponent
  constructor() {}
  
  ngOnInit(): void {
    this.field = [{
      id:"name",
      type:"input",
      name:"firstname",
      field:"firstname",
      label:"First Name",
      hidden:false,
      readOnly:false,
      isRequired:true,
      colSpan:1,
      labelColSpan:4,
      fieldCssClass:'col-12',
      selectionChange:this.inputValue
    }];
  }

  inputValue = (event) =>{
    console.log(event.target.value);
  }
  submit(event){

  }
}
