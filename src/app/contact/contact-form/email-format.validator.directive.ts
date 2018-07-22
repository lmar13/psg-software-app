import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appEmailFormat]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailFormatValidator,
      multi: true
    }
  ]
})
export class EmailFormatValidator implements Validator {
  // tslint:disable-next-line:no-input-rename
  // @Input('appIncludeText') requiredText = 'big';

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {

    const inputValue: string = control.value;
    // tslint:disable-next-line:max-line-length
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!inputValue || inputValue.match(emailRegex)) {
      return null;
    } else {
      return { emailFormatError: true };
    }
  }
}
