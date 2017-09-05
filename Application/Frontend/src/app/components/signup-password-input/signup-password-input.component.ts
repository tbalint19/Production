import { Component, Input } from "@angular/core";
import { Router } from '@angular/router';
import { SignupUser, CheckResponse } from '../../_models/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'signup-password-input.component.html',
    styleUrls: ['signup-password-input.component.css'],
    selector: 'signup-password-input'
})
export class SignupPasswordInputComponent{

    @Input() user: SignupUser;
    private shouldShowError: boolean = false;

    constructor(private router: Router){
    }

    onBlur(){
        this.shouldShowError = !this.user.passwordIsValid();
    }

    onFocus(){
        this.shouldShowError = false;
    }

    shouldShowInfo(){
        return !this.user.passwordIsValid() && !this.shouldShowError;
    }

    shouldShowSuccess(){
        return this.user.passwordIsValid();
    }
}
