import { Component, Input } from "@angular/core";
import { Router } from '@angular/router';
import { UserService } from '../../_services/_index'
import { SignupUser, SignupStatus, CheckResponse } from '../../_models/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'signup-email-input.component.html',
    styleUrls: ['signup-email-input.component.css'],
    selector: 'signup-email-input'
})
export class SignupEmailInputComponent{

    @Input() user: SignupUser;
    @Input() status: SignupStatus;

    constructor(private router: Router, private userService: UserService){
    }

    checkEmail(){
        if (this.user.emailIsValid()) {
            let observed = this.user.email;
            this.user.emailIsAvailable = false;
            this.status.emailIsChecked = true;
            this.userService.checkEmail(observed).subscribe(
              (response: CheckResponse) => {
                if (observed == this.user.email) {
                  this.user.emailIsAvailable = !response.is_occupied;
                  this.status.emailIsChecked = false;
                }
              }
            )
        } else { this.status.emailIsChecked = false; }
    }

    shouldShowInfo(){
        return !this.user.email || this.user.email && !this.user.emailIsValid();
    }

    shouldShowLoading(){
        return this.status.emailIsChecked;
    }

    shouldShowError(){
        return !this.user.emailIsAvailable && !this.status.emailIsChecked && this.user.emailIsValid();
    }

    shouldShowSuccess(){
        return this.user.emailIsAvailable && this.user.emailIsValid();
    }
}
