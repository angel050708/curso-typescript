import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[minSearchLength]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinSearchLengthDirective, multi: true }],
})
export class MinSearchLengthDirective implements Validator {
  @Input() minSearchLength = 2;

  validate(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value || '';
    if (value.length > 0 && value.length < this.minSearchLength) {
      return { minSearchLength: { required: this.minSearchLength, actual: value.length } };
    }
    return null;
  }
}
