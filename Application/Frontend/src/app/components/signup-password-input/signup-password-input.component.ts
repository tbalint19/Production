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
    private shouldShowErrorPassword: boolean = false;
    private shouldShowErrorPasswordAgain: boolean = false;

    constructor(private router: Router){
    }

    onBlurPassword(){
        this.shouldShowErrorPassword = !this.user.passwordIsValid();
    }

    onFocusPassword(){
        this.shouldShowErrorPassword = false;
    }

    shouldShowInfoPassword(){
        return !this.user.passwordIsValid() && !this.shouldBeRed();
    }

    shouldShowSuccessPassword(){
        return this.user.passwordIsValid();
    }

    shouldBeRed(){
        return this.shouldShowErrorPassword && this.user.usernameIsValid() && this.user.emailIsValid();
    }

    onBlurPasswordAgain(){
        this.shouldShowErrorPasswordAgain = !(this.user.password == this.user.passwordAgain) && !this.shouldShowBasicPasswordAgain();
    }

    onFocusPasswordAgain(){
        this.shouldShowErrorPasswordAgain = false;
    }

    shouldShowBasicPasswordAgain(){
        return !this.user.passwordIsValid();
    }

    shouldShowInfoPasswordAgain(){
        return !this.shouldShowSuccessPasswordAgain() && !this.shouldShowErrorPasswordAgain && !this.shouldShowBasicPasswordAgain();
    }

    shouldShowSuccessPasswordAgain(){
        return this.user.password == this.user.passwordAgain && this.user.passwordIsValid();
    }

    shouldShow(){
        return this.shouldShowErrorPasswordAgain && !this.shouldShowBasicPasswordAgain();
    }

}
