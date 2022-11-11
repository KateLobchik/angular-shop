import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: DropdownComponent
  }]
})

export class DropdownComponent implements ControlValueAccessor {
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
}


interface DropdownOption {
  label: string;
  code: string;
}
