 export interface IFormConfig {
    width?: string;
    height?: string;
    extended?: any;
    fields: AgrFormFieldConfig[];
    callback?: any;
}
export interface AgrFormFieldConfig {
    id?: string;
    label?: string;
    name?: string;
    inputType?: string; // text, select, checkbox, radio
    selectKey?: string; // for html select control
    selectValue?: string; // for html select control
    displayValue?: string; // for mat chips control
    displayCount?: number; // for mat chips control
    searchCtrl?:any; //for mat select search
    options?: string[] | any;
    allOptions?: string[] | any;
    compareWith?: any;
    collections?: any;
    type: string;
    value?: any;
    validations?: Validator[];
    colSpan?: number;
    labelcolSpan?: number;
    rowSpan?: number;
    dataSource?: AgrFormFieldDataSource;
    field?: string;
    readOnly?: boolean;
    height?: string;
    hidden?: boolean;
    cssClass?: string;
    fieldCssClass?: string;
    labelColSpan?: number;
    labelcssClass?: string;
    selectionChange?: any;
    clickEvent?: any;
    maxlength?: string;
    keySelect?: boolean;
    min?: number;
    max?: number;
    icon?: string;
    isRequired?: boolean;
    minimumFractionDigits?: number;
    displayYesNoLabel?:boolean;
    showLabel?:boolean;
    searchType?:string;
    displayName?:string;
    isMultiple?: boolean;
    displayIcon?:boolean;
    enableFilter?: boolean;
    tooltipText?: string;
    isBlankRestricted?: boolean;
    dblClick?:any;
    showNegativeSign?: boolean;
    isFreeText?:boolean;
    listLimit?:number;
    panelClass?:string;
}

export interface AgrFormFieldDataSource {
    url: string;
    nameValue: any;
}
export interface Validator {
    name: string;
    validator: any;
    message: string;
}
