import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0){
            return {cannotContainSpace : true};
        }
        return null;
    } // cannotContainSpace

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Ok');
                if (control.value === 'dani') {
                    resolve({shouldBeUnique: true});
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    } // shouldBeUnique

} // class
