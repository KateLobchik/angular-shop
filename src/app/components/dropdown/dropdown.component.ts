import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from "@angular/forms";

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: DropdownComponent
  },
    {
      provide: NG_VALIDATORS,
      useExisting: DropdownComponent,
      multi: true,
    },]
})

export class DropdownComponent implements ControlValueAccessor, Validator {
  isOpenedMenu = false;

  propagateChange = (_: any) => {};

  @Input() label = '';
  @Input() options:DropdownOption[] = [];
  @Input() _selectOption?: DropdownOption;

  get selectOption() {
    return this._selectOption;
  }

  set selectOption(option) {
    this._selectOption = option;
    this.propagateChange(this._selectOption);
  }

  chooseOption(option: DropdownOption) {
    this.selectOption = option;
  }

  writeValue(value: any) {
    this._selectOption = value;
  }

  registerOnChange(fn: () => {}) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  @HostListener('document:click', ['$event.target']) closeMenu(element: Element): void {
    this.isOpenedMenu = false;
  }

  toggleMenu(evt: Event): void {
    if (!this.isOpenedMenu) {
      evt.stopPropagation();
      evt.preventDefault();
    }
    this.isOpenedMenu = !this.isOpenedMenu;
  }
  validate(control: AbstractControl): ValidationErrors | null {
    console.log("%c-------------  %s", 'color: #ff00ff', 'dropdown validate   ----------------');
    console.log('control:', control);
    console.log('errors:', control.errors);
    console.log('status:', control.status);
    console.log("%c---------------%s", 'color: #ff00ff', '------------------------------------');


    if(control.value.label !== 'Новинки') {
      return {"NoNEW": true};
    }
    return null;
  }
}


interface DropdownOption {
  label: string;
  code: string;
}
