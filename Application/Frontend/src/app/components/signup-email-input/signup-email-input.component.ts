import { Component, Input } from "@angular/core";
import { Router } from '@angular/router';
import { UserService } from '../../_services/_index'
import { SignupUser, CheckResponse } from '../../_models/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'signup-email-input.component.html',
    styleUrls: ['signup-email-input.component.css'],
    selector: 'signup-email-input'
})
export class SignupEmailInputComponent{

    @Input() user: SignupUser;
    private isChecking: boolean;

    constructor(private router: Router, private userService: UserService){
    }

    checkEmail(){
        if (this.user.emailIsValid()) {
            let observed = this.user.email;
            this.user.emailIsAvailable = false;
            this.isChecking = true;
            this.userService.checkUsername(observed).subscribe(
              (response: CheckResponse) => {
                if (observed == this.user.email) {
                  this.user.emailIsAvailable = !response.is_occupied;
                  this.isChecking = false;
                }
              }
            )
        } else { this.isChecking = false; }
    }

    shouldShowInfo(){
        return !this.user.email || this.user.email && !this.user.emailIsValid();
    }

    shouldShowLoading(){
        return this.isChecking;
    }

    shouldShowError(){
        return !this.user.emailIsAvailable && !this.isChecking && this.user.emailIsValid();
    }

    shouldShowSuccess(){
        return this.user.emailIsAvailable && this.user.emailIsValid();
    }
}
