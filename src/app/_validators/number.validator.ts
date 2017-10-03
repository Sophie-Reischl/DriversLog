import { AbstractControl, ValidatorFn } from '@angular/forms'

export function NumberValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    return +control.value > 0 ? null : { greaterThan: true }
  }
}
