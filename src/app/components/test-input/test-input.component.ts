import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup, NG_VALIDATORS,
  NG_VALUE_ACCESSOR, ValidationErrors, Validator
} from "@angular/forms";
import {ReplaySubject, takeUntil} from "rxjs";


interface FormGroupControls {
  customInput: AbstractControl;
}

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TestInputComponent
    },
    {
      provide: NG_VALIDATORS,
      useExisting: TestInputComponent,
      multi: true,
    },]
})

export class TestInputComponent implements OnInit, ControlValueAccessor, OnDestroy, Validator {
  customInputForm = this.initFormGroup();

  onChange: any = () => {
  };

  onTouch: any = () => {
  };

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    console.log('this.testInputForm.get(customInput)', this.customInputForm.get('customInput'));

    // this.testInputForm.get('customInput')?.parent?.statusChanges.subscribe(value => {
    //   console.log('Parent status', value);
    //   const parentError = this.testInputForm.get('customInput')?.parent?.errors;
    //   if (parentError !== undefined) {
    //     this.testInputForm.get('customInput')?.setErrors(parentError);
    //   }
    // })
  }

  ngOnInit(): void {
    this.customInputForm.get('customInput')?.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((value) => {
      this.onChange(value);
    });

  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(value: any): void {
    this.valueTestInput = value;
  }


  //для установки первоначалльного значения
  get valueTestInput(): any {
    return this.customInputForm.value;
  }

  set valueTestInput(val: any) {
    if (['string', 'number', 'boolean'].includes(typeof val)) {
      val = {
        customInput: val,
      };
    }
    this.customInputForm.patchValue(val);
  }


  private initFormGroup(): FormGroup {
    const formGroup = this.formBuilder.group(
      {
        customInput: new FormControl(undefined),
      } as FormGroupControls,
      {validators: []},
    );

    const formControls = formGroup.controls as unknown as FormGroupControls;

    formControls.customInput.valueChanges.subscribe((value) => this.oninputTestValueChanges(value));
    formControls.customInput.statusChanges.subscribe((value) => this.oninputTestStatusChanges(value));

    return formGroup;
  }

  oninputTestValueChanges(val: any) {
    console.log('oninputTestValueChanges', val);
  }

  oninputTestStatusChanges(val: any) {
    console.log('oninputTestStatusChanges', val);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    console.log("%c-------------  %s", 'color: #d38520', 'CustomInput validate   ----------------');
    console.log('control:', control);
    console.log('errors:', control.errors);
    console.log('status:', control.status);
    console.log("%c---------------%s", 'color: #d38520', '------------------------------------');

    return null;
  }

}
