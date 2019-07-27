import { AbstractControl, ValidationErrors } from '@angular/forms';

export class SpaceValidator {
    static canNotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') > 0) {
            return { canNotContainSpace: true}
        }
        return null;
    }
}