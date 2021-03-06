import { Component, Input } from "@angular/core";
import { Router } from '@angular/router';
import { UserService } from '../../_services/_index'
import { SignupUser, SignupStatus, CheckResponse } from '../../_models/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'signup-username-input.component.html',
    styleUrls: ['signup-username-input.component.css'],
    selector: 'signup-username-input'
})
export class SignupUsernameInputComponent{

    @Input() user: SignupUser;
    @Input() status: SignupStatus;

    constructor(private router: Router, private userService: UserService){
    }

    checkUsername(){
        if (this.user.usernameIsValid()) {
            let observed = this.user.username;
            this.user.usernameIsAvailable = false;
            this.status.usernameIsChecked = true;
            this.userService.checkUsername(observed).subscribe(
              (response: CheckResponse) => {
                if (observed == this.user.username) {
                  this.user.usernameIsAvailable = !response.is_occupied;
                  this.status.usernameIsChecked = false;
                }
              }
            )
        } else { this.status.usernameIsChecked = false; }
    }

    shouldShowInfo(){
        return !this.user.username || this.user.username && !this.user.usernameIsValid();
    }

    shouldShowLoading(){
        return this.status.usernameIsChecked;
    }

    shouldShowError(){
        return !this.user.usernameIsAvailable && !this.status.usernameIsChecked  && this.user.usernameIsValid();
    }

    shouldShowSuccess(){
        return this.user.usernameIsAvailable && this.user.usernameIsValid();
    }
}
