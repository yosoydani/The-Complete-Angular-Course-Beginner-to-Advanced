import { AbstractControl, ValidationErrors } from '@angular/forms';

// creo la clase
export class ChangPasswordValidadtor {
   static oldPassIsValid(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            console.log('ok, ' + control.value);
            setTimeout(() => {
                if (control.value !== '1234' ) {
                    console.log('true');
                    resolve({oldPassIsValid: true});
                } else {
                    console.log('false');
                    resolve(null);
                }
            }, 2000);
        }); // promesa
    } // oldpassValid

    static confirmNewPass(control: AbstractControl): ValidationErrors | null {
        // console.log(control);
        const newPassword = control.get('newPassword');
        const confirmPassword = control.get('confirmPassword');
        if (newPassword.value !== confirmPassword.value) {
            return {confirmNewPass: true};
        }
        return null;
    }
}
