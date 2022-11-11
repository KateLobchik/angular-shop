import { Component, OnInit } from '@angular/core';
import {gamesList} from "../../mocks/game-list";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  parentForm = new FormGroup({
    parentFormInput: new FormControl({value: undefined}, Validators.required),
    parentFormDropdown: new FormControl({value: undefined})
  })

  mockGamesList = gamesList;
  sortList = sortList;

  constructor() { }

  ngOnInit(): void {
    this.parentForm.get('parentFormDropdown')?.setValue(this.sortList[0]);
  }

  setValue(name: string) {
    this.parentForm.get('parentFormInput')?.setValue(name)
  }

  resetValue() {
    this.parentForm.reset();
  }

  // dropdownValidator(control: AbstractControl): {[s:string]:boolean}|null {
  //   console.log(control);
  //   if(control.value.label !== 'Новинки') {
  //     return {"NoNEW": true};
  //   }
  //   return null;
  // }
}


const sortList = [
  {
    label: 'Новинки',
    code: 'new'
  },
  {
    label: 'По алфавиту',
    code: 'abc'
  },
  {
    label: 'Цена: по возрастанию',
    code: 'priceup'
  },
  {
    label: 'Цена: по убыванию',
    code: 'pricedown'
  }
]
