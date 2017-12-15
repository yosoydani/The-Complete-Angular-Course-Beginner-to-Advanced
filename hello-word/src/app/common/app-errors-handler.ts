import { ErrorHandler } from '@angular/core/';

export class AppErrorHandler implements ErrorHandler {

    handleError(error: any): void {
       // throw new Error("Method not implemented.");
       alert('An unexpected error ocurred');
       console.log(error);
    }

}
